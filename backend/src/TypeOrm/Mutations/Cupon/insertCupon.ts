import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";
import { existsCupon } from "./existsCuponDescuento";

export async function insertCupon(codigo: string, descuento: number) {

    if (await existsCupon(codigo)){

        throw `ERROR, YA EXISTE EL CUPON`
    }

    const cupon = new CuponDeDescuento()

    cupon.codigo = codigo
    cupon.cantidad_descuento = descuento

    await cupon.save()
    
}








