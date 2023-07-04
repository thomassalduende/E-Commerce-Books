import { insertCupon } from "../../../TypeOrm/Mutations/Cupon/insertCupon";
import { Send } from "../../../TypesDefs/Send";

export async function insertCuponDescuento(codigo_cupon: string, cantidad_desc: number) {

    const message = new Send()

    try{

        await insertCupon(codigo_cupon, cantidad_desc)

        message.message = 'Cupon insertado!'
        message.success = true

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }
}