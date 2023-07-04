import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";

export async function existsCupon(codigo: string) {

    const result = await CuponDeDescuento.find({
        where: {
            codigo: codigo
        }
    })
    return result[0] ? true : false
}








