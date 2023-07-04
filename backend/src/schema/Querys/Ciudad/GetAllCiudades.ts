import { getAllCiudad } from "../../../TypeOrm/Querys/Ciudad/getAllCiudad";
import { SendCiudades } from "../../../TypesDefs/SendCiudades";


export async function GetAllCiudades() {

    const message = new SendCiudades()

    try {
        const ciudades = await getAllCiudad()

        message.message = 'Ciudades obtenidas'
        message.success = true;
        message.ciudad = ciudades;

        return message;
        
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}