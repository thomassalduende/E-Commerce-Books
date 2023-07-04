import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsInsertGenero {

    @Field()
    nombre: string;

    @Field()
    url_imagen: string;
}

@ArgsType()
export class ArgsUpdateGenero {

    @Field()
    nombre_orig: string;

    @Field()
    nombre: string;

    @Field()
    url_imagen: string;
}