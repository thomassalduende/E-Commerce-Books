import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsInsertCiudad {

    @Field()
    nombre: string;

    @Field()
    nombre_prov: string;

    @Field()
    cod_postal: number;
}