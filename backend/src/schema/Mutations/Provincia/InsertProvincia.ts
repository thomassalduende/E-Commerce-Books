import { Send } from "../../../TypesDefs/Send";
import { insertProvincia } from "../../../TypeOrm/Mutations/Provincia/insertProvincia";


export async function InsertProvincia(nombre: string) {

    const message = new Send()

    try{

        await insertProvincia(nombre)

        message.message = 'Provincia Insertada'
        message.success = true;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }    
}