import { getAllGenero } from "../../../TypeOrm/Querys/Genero/getAllGenero";
import { SendGeneros } from "../../../TypesDefs/SendGeneros";



export async function getGeneros(): Promise<SendGeneros> {

    const message = new SendGeneros()

    try{

        const generos = await getAllGenero()

        message.message = 'Generos obtenidos'
        message.success = true;
        message.genero = generos;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false

        return message;
    }
}