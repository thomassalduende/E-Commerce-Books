import { ILike } from "typeorm"
// Obtiene un unico elemento
export async function getElementByNombre(nombre: any, entitie: any){

    const resultado = await entitie.find({
        where:
        {
            nombre: ILike(nombre)
        }
    })
    return resultado[0]
}