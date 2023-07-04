import { Resolver, Query, Mutation, Args } from "type-graphql";
import { SendFactura } from "../../../TypesDefs/SendFactura";
import { ArgsGetFacuras } from "../../ArgsDefs/argsDefsFactura";

import { GetFactura } from "../../Querys/Factura/getFacturas";


@Resolver()
export class ResolverFactura {


    @Query(() => SendFactura)
    async getFactura(@Args() args: ArgsGetFacuras) {

        return await GetFactura(args)
    }
}