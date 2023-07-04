// query que obtiene todos los usuarios
import { getAllUsuarios } from "../../../TypeOrm/Querys/Usuario/getAllUsuarios";
import { SendUsers } from "../../../TypesDefs/SendUsers";



export async function GetUsers(): Promise<SendUsers>{

    const message = new SendUsers()

    try{
        const users = await getAllUsuarios()

        message.message = 'Users obtenidos'
        message.success = true;
        message.users = users;

        return message;
    }catch(error: any){
        
        message.message = error;
        message.success = false

        return message;
    }
    
}