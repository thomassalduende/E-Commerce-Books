import express from 'express'
import { ApolloServer } from 'apollo-server-express'
// import { graphqlHTTP } from 'express-graphql'
import bodyParser from 'body-parser'
import { buildSchema } from 'type-graphql'
import { notificarMP } from './ControlerMail/notificarMp'
import { CuponResolver } from './schema/Resolvers/CuponDescuento/resolverCupon'
import { CiudadResolver } from './schema/Resolvers/Ciudad/resolverCiudad'
import { GeneroResolver } from './schema/Resolvers/Genero/resolverGenero'
import { ProvinciaResolver } from './schema/Resolvers/Provincia/resolverProvincia'
import { UserResolver } from './schema/Resolvers/Usuario/resolverUser'
import { ResolverBook } from './schema/Resolvers/Books/ResolverBook'



export async function StartServer() {

    const app = express()
    // app.use(cors());
    // app.use(express.json())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers:[CuponResolver, CiudadResolver, GeneroResolver, ProvinciaResolver, UserResolver, ResolverBook],
            validate: false
        }),
        context: ({req, res}) => ({req, res})
    });

    await server.start()

    app.post('/pagos/notificacion', async (req: any, res: any) => {
        await notificarMP(req, res)
    })

    server.applyMiddleware({app, path:'/graphql'});

    // app.use('/graphql', graphqlHTTP({
    //     graphiql: true,
    //     schema: schema
    // }))

    return app;
}

