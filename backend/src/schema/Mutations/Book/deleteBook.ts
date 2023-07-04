import { measureMemory } from "vm";
import { deleteBook } from "../../../TypeOrm/Mutations/Book/deleteBook";
import { Send } from "../../../TypesDefs/Send";


export async function DeleteBook(isbn: string) {

    const message = new Send()

    try{
        await deleteBook(isbn)

        message.message = 'EL LIBRO FUE ELIMINADO CON EXITO';
        message.success = true;

        return message;
    }catch(error: any){
        message.message = error;
        message.success = false;

        return message;
    }
    
}