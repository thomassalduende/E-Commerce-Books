import { SendFactura } from "../../../TypesDefs/SendFactura";
import { getAllFactura } from "../../../TypeOrm/Querys/Factura/getAllFActura";
import { getFacturasFecha } from "../../../TypeOrm/Querys/Factura/getFacturasFecha";
import { getFacturaID } from "../../../TypeOrm/Querys/Factura/getFacturaId";


async function FuncionGetFactura(args: any) {

    if((args.fechaMenor && args.fechaMayor) && (args.fechaMenor != '' && args.fechaMayor != '')){

        return await getFacturasFecha(args.fechaMenor, args.fechaMayor)

    }else if((args.id) && (args.id != '')){

        return await getFacturaID(args.id)
    }
    
    return await getAllFactura();

}

export async function GetFactura(args: any) {

    const message = new SendFactura()

    try {
        const factura = await FuncionGetFactura(args)

        message.message = 'Facturas obtenidas'
        message.success = true;
        message.factura = factura

        return message;

    }catch(error: any){
        message.message = error;
        message.success = false;

        return message;
    }  
}

