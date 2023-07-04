import { ArgsType, Field, Float} from "type-graphql";

@ArgsType()
export class ArgsGetBook {
    @Field()
    nombre: string = '';

    @Field()
    isbn: string = '';

    @Field()
    genero: string = '';

    @Field()
    autor: string = '';
}

@ArgsType()
export class ArgsInsertBook {

    @Field()
    isbn: string

    @Field()
    imagen: string 

    @Field()
    nombre: string

    @Field(type => Float)
    precio: number

    @Field()
    stock: number

    @Field()
    descripcion: string

    @Field()
    fecha_ingreso: string

    @Field()
    editorial: string

    @Field()
    descuento?: number

    @Field(type => [String])
    genero: Array<string>

    @Field(type => [String])
    autor: Array<string>
}

@ArgsType()
export class ArgsUpdateBook {

    @Field()
    isbn_orig: string

    @Field()
    isbn: string

    @Field()
    imagen: string 

    @Field()
    nombre: string

    @Field(type => Float)
    precio: number

    @Field()
    stock: number

    @Field()
    descripcion: string

    @Field()
    fecha_ingreso: string

    @Field()
    editorial: string

    @Field()
    descuento?: number

    @Field(type => [String])
    genero: Array<string>

    @Field(type => [String])
    autor: Array<string>
}