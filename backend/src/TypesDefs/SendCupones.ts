import { Field, ObjectType } from "type-graphql";
import { CuponDeDescuento } from "../Entities/CuponDeDescuento";
import { Send } from "./Send";


@ObjectType()
export class SendCupones extends Send {

    @Field(type => [CuponDeDescuento])
    cupon: CuponDeDescuento[]
}