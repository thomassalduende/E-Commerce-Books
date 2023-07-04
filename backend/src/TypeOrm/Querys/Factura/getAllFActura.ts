import { Factura } from "../../../Entities/Factura";

export async function getAllFactura() {

    const factura = await Factura.find({
        relations: {
            book: true
        }
    })

    return factura
}