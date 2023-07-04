import { ArgsType, Field, Float } from "type-graphql";

@ArgsType()
export class ArgsInsertCupon {

    @Field()
    codigo: string;

    @Field(type => Float)
    descuento: number;
}