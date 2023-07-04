import { Send } from "./Send";
import { Ciudad } from "../Entities/Ciudad";
import { Field, ObjectType } from "type-graphql";


@ObjectType()
export class SendCiudades extends Send {

    @Field(type => [Ciudad])
    ciudad: Ciudad[]
}