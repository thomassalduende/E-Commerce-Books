import { Factura } from "../../../Entities/Factura";
import { Between } from "typeorm";

export async function getFacturasFecha(fechaMenor: string, fechaMayor: string) {

    const factura = await Factura.find({
        relations: {
            book: true
        },
        where: {
            fecha: Between(fechaMenor, fechaMayor)
        }
    })

    return factura
}