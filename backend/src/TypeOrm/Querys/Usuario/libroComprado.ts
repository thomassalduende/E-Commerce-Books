import { Factura } from "../../../Entities/Factura";

export async function libroComprado (isbn: string, id: number) {

    const comprado = await Factura.find({
        relations:{
            users: true,
            factura_detalle: {
                book: true
            }
        },
        where: {
            users: {
                id: id
            },
            factura_detalle: {
                book: {
                    isbn: isbn
                }
            }
        }
    })

    return comprado[0]? true : false
}