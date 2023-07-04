import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";
import { Autor } from "../Entities/Autor";


@ObjectType()
export class SendAutor extends Send {

    @Field(type => [Autor])
    autor: Autor[]
}