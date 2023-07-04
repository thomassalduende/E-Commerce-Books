import { Send } from "./Send";
import { Users } from "../Entities/Users";
import { Field } from "type-graphql";


export class SendUsers extends Send {

    @Field(type => [Users])
    users: Users[]
}