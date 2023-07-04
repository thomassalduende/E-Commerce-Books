import { verify } from "jsonwebtoken";

import { deleteOpinion } from "../../../TypeOrm/Mutations/Usuario/deleteOpinion";
import { Send } from "../../../TypesDefs/Send";


export async function DeleteOpinion(isbn: string, tokenUser: string) {

    const message = new Send()

    try{
        const id = parseInt(<string>verify(tokenUser,  'secret-key'))

        await deleteOpinion(id, isbn)

        message.message = "Opinion eliminada";
        message.success = true;

        return message;

    }catch(error: any) {
        message.message = error;
        message.success = false;

        return message;
    }
}