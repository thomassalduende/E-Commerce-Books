import { insertGenero } from "../../../TypeOrm/Mutations/Genero/insertGenero";
import { Send } from "../../../TypesDefs/Send";

export async function InsertGenero(nombre: string, url_imagen: string) {

    const message = new Send()

    try{
        await insertGenero(nombre, url_imagen)

        message.message = 'GENERO INSERTADO'
        message.success = true

        return message;
    }catch(error: any){

        message.message = error;

        return message;
    }
}