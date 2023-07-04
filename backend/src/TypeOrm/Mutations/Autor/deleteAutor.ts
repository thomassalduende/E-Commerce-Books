import { Autor } from "../../../Entities/Autor";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function deleteAutor(nombreAutor: string) {

    const existeAutor = existsNombre(nombreAutor, Autor)

    if (!existeAutor)
        throw `ERROR, EL AUTOR ${nombreAutor} NO EXISTE`

    const autor = await getElementByNombre(nombreAutor, Autor)

    await autor[0].remove()
    
}