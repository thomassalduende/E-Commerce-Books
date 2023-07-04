import { Resolver, Mutation, Arg } from "type-graphql";
import { Send } from "../../../TypesDefs/Send";
import { InsertProvincia } from "../../Mutations/Provincia/InsertProvincia";
import { DeleteProvincia } from "../../Mutations/Provincia/DeleteProvincia";


@Resolver()
export class ProvinciaResolver {

    @Mutation(() => Send)
    async insertProvincia(@Arg('nombre') nombre: string){

        return await InsertProvincia(nombre)
    }

    @Mutation(() => Send)
    async deleteProvincia(@Arg('nombre') nombre: string){

        return await DeleteProvincia(nombre)
    }

}