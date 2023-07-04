import { insertCiudad } from "../../../TypeOrm/Mutations/Ciudad/insertCiudad";
import { Send } from "../../../TypesDefs/Send";


export async function InsertCiudad(nombre: string, nombreProv: string, cod_postal: number) {

    const message = new Send()

    try{
        await insertCiudad(nombre, nombreProv, cod_postal)

        message.message = 'CIUDAD INSERTADA CON EXITO'
        message.success = true;

        return message
    }catch(error: any){
        message.message = error
        message.success = false

        return message
    }  
}






