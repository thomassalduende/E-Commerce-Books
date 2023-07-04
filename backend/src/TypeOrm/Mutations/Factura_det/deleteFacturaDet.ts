import { Factura_detalle } from "../../../Entities/Factura_detalllada";

export async function deleteFacturaDet(id: number) {

    const fatura = await Factura_detalle.find({
        where: {
            id: id
        }
    })

    if(!fatura[0])
        throw `ERROR, LA FACTURA CON ID: ${id} NO EXISTE`
    

    await fatura[0].remove()
 
}