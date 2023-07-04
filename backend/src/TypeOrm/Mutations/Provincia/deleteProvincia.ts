import { Provincia } from "../../../Entities/Provincia";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";


export async function deleteProvincia(nombreProvicia: string) {

    const existeProvincia = await existsNombre(nombreProvicia, Provincia)

    if (!existeProvincia)
        throw `ERROR, LA PROVINCIA ${nombreProvicia} NO EXISTE`

    const provincia = await getElementByNombre(nombreProvicia, Provincia)

    

    await provincia.remove()
    
}