import 'reflect-metadata'
// import app from './app'
import {ConnectionBD} from './db'
import { StartServer } from './app'

async function main() {
    try {
        await ConnectionBD.initialize()
        const app = await StartServer()
        app.listen(3000)
        console.log(`Server initialize on http://localhost:${3000}/graphql`)
        
    } catch (error) {  

        console.log(error)      
    }   
}
main()

