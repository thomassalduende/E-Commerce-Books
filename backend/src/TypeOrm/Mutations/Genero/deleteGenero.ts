import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Genero } from "../../../Entities/Genero";


export async function deleteGenero(nombreGenero: string) {

    const genero = await getElementByNombre(nombreGenero, Genero)

    if (!genero){

        throw `ERROR, NO EXISTE EL GENERO ${nombreGenero}`
    }
        
    await genero[0].remove()
}