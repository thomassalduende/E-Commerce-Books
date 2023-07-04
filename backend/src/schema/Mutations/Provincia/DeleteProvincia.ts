import { deleteProvincia } from "../../../TypeOrm/Mutations/Provincia/deleteProvincia";
import { Send } from "../../../TypesDefs/Send";


export async function DeleteProvincia(nombre: string) {

    const message = new Send()

    try{
        await deleteProvincia(nombre)

        message.message = 'Proviancia eliminada'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}