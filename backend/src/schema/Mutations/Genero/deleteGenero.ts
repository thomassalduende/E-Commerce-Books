import { deleteGenero } from "../../../TypeOrm/Mutations/Genero/deleteGenero";
import { Send } from "../../../TypesDefs/Send";


export async function DeleteGenero(nombre: string) {

    const message = new Send()

    try{
        await deleteGenero(nombre)

        message.message = 'GENERO ELIMINADO'
        message.success = true

        return message;

    }catch(error: any){

        message.message = error;
        
        return message;
    }

}