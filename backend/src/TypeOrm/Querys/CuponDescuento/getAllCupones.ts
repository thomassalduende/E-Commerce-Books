import { CuponDeDescuento } from "../../../Entities/CuponDeDescuento";

export async function getAllCupones() {

    const cupones = await CuponDeDescuento.find()

    return cupones;
}