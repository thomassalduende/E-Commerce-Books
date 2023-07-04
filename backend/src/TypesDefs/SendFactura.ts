import { Field, ObjectType } from "type-graphql";
import { Factura } from "../Entities/Factura";
import { Send } from "./Send";


@ObjectType()

export class SendFactura extends Send {

    @Field(type => [Factura])
    factura: Factura[] 

}