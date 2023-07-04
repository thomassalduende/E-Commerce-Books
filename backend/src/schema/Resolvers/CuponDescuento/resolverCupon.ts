import { Resolver, Args, Arg, Mutation, Query } from "type-graphql";
import { Send } from "../../../TypesDefs/Send";
import { insertCuponDescuento } from "../../Mutations/CuponDescuento/insertCupon";
import { deleteCupon } from "../../Mutations/CuponDescuento/deleteCupon";
import { ArgsInsertCupon } from "../../ArgsDefs/argsDefsCupones";
import { getCupones } from "../../Querys/CuponDescuento/getCupones";

@Resolver()
export class CuponResolver {

    @Mutation(() => Send)
    async InsertCupon(@Args() {codigo, descuento}: ArgsInsertCupon){

        return await insertCuponDescuento(codigo, descuento)
    }

    @Mutation(() => Send)
    async DeleteCupon(@Arg('codigo') codigo: string){

        return await deleteCupon(codigo)
    }

    @Query(() => Send)
    async getCupones(){

        return await getCupones()
    }

}