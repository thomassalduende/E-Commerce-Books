import { Field, ObjectType } from "type-graphql";
import { Send } from "./Send";

@ObjectType()
export class SendMercadoPago extends Send
{
    @Field()
    init_p: string = '';
}