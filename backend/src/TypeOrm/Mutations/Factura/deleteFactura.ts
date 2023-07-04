import { Factura } from "../../../Entities/Factura";

export async function deleteFactura(id: number) {

    const factura = await Factura.find({
        where: {
            id: id
        }
    })

    if (!factura[0]){
        throw `ERROR, LA FACTURA CON ID ${id} NO EXISTE`
    }

    await factura[0].remove()
}