import { Resolver, Mutation, Query, Arg, Args } from "type-graphql";
import { Send } from "../../../TypesDefs/Send";
import { SendCiudades } from "../../../TypesDefs/SendCiudades";
import { DeleteCiudad } from "../../Mutations/Ciudad/deleteCiudad";
import { InsertCiudad } from "../../Mutations/Ciudad/insertCiudad";
import { GetAllCiudades } from "../../Querys/Ciudad/GetAllCiudades";
import { ArgsInsertCiudad } from "../../ArgsDefs/argsDefsCiudad";


export class CiudadResolver {

    @Mutation(() => Send)
    async insertCiudad(@Args() {nombre, nombre_prov, cod_postal}: ArgsInsertCiudad){

        return await InsertCiudad(nombre, nombre_prov, cod_postal)
    }

    @Mutation(() => Send)
    async deleteCiudad(@Arg('nombre') nombre: string){

        return await DeleteCiudad(nombre)
    }

    @Query(() => SendCiudades)
    async getCiudad(){

        return await GetAllCiudades()
    }
}