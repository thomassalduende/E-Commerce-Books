import { Field, ObjectType} from "type-graphql";

@ObjectType()
export class Send {

    @Field()
    message: string = '';

    @Field()
    success: boolean = false;
}






