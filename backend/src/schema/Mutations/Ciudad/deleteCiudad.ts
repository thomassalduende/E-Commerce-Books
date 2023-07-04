import { deleteCiudad } from "../../../TypeOrm/Mutations/Ciudad/deleteCiudad";
import { Send } from "../../../TypesDefs/Send";

export async function DeleteCiudad(nombre: string) {

    const message = new Send()

    try{
        await deleteCiudad(nombre)

        message.message = `LA CIUDAD SE ELIMINO CON EXITO`
        message.success = true
    }catch(error: any){
        message.message = error;
        message.success = false;

        return message;
    }
}