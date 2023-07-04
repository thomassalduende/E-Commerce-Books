import { ILike } from "typeorm";
// determina si existe una entidad
export async function existsNombre(nombre: any, entitie: any) {

    const resultado = await entitie.find({
        where:
        {
            nombre: ILike(nombre)
        }
    })
    return resultado[0]? true : false
}