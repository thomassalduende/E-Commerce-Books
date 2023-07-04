import { realizarCompra } from "../../../TypeOrm/Mutations/Usuario/realizarCompra";
import { SendMercadoPago } from "../../../TypesDefs/SendMercadoPago";
import { verify } from "jsonwebtoken";



export async function RealizarCompra(tokenUser: string) {

    const message = new SendMercadoPago()

    try{

        const id = parseInt(<string>verify(tokenUser, 'secret-key'))

        const res = await realizarCompra(id)

        message.message = 'compra realizada'
        message.success = true;
        message.init_p = res;

        return message;
    }catch(error){
        message.message = 'compra rechazada'
        message.success = false;
        message.init_p = ''
        console.log(error)

        return message;
    }
}