import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Ciudad } from "../../../Entities/Ciudad";

export async function deleteCiudad(nombreCiudad: string) {
    
    const existeCiudad = await existsNombre(nombreCiudad, Ciudad)

    if (!existeCiudad)
        throw `ERROR, NO EXISTE LA CIUDAD ${nombreCiudad}`

    const ciudad = await getElementByNombre(nombreCiudad, Ciudad)

    await ciudad.remove()
}







