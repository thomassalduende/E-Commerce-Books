import { updateGenero } from "../../../TypeOrm/Mutations/Genero/updateGenero";
import { Send } from "../../../TypesDefs/Send";


export async function UpdateGenero(nombre_orig: string, nombre: string, url_imagen: string) {

    const message = new Send()

    try{
        await updateGenero(nombre_orig, nombre, url_imagen)

        message.message = 'GENERO MODIFICADO'
        message.success = true

        return message;

    }catch(error: any){

        message.message = error;

        return message
    }
    
}