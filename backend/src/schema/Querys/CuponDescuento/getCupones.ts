import { getAllCupones } from "../../../TypeOrm/Querys/CuponDescuento/getAllCupones";
import { SendCupones } from "../../../TypesDefs/SendCupones";


export async function getCupones() {

    const message = new SendCupones()

    try{
        const cupones = await getAllCupones()

        message.message = 'Cupones obtenidos'
        message.success = true;
        message.cupon = cupones;

        return message;
    }catch(error: any){

        message.message = error;
        message.success = false;

        return message;
    }    
}