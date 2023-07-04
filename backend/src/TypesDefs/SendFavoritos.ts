import { ObjectType, Field } from "type-graphql";
import { Send } from "./Send";
import { Favoritos } from "../Entities/Favoritos_user";


@ObjectType()
export class SendFavoritos extends Send {

    @Field(type => [Favoritos])
    favoritos: Favoritos[];
}