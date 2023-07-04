import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsGetFacuras {

    @Field()
    fechaMenor: string = '';

    @Field()
    fechaMayor: string = '';

    @Field()
    id_factura: string = '';
}

