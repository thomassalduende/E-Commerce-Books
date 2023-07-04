import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";

export async function deleteCuponDesc(codigo_cupon: string) {


    const cupon = await CuponDeDescuento.find({
        where: {
            codigo: codigo_cupon
        }
    })

    if(!cupon){
        throw `ERROR, EL CUPON N° ${codigo_cupon} NO EXISTE`
    }

    await cupon[0].remove() 
}