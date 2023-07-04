import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Editorial } from "../../../Entities/Editorial";


export async function deleteEditorial(nombreEditorial: string) {

    const existeEditorial = existsNombre(nombreEditorial, Editorial)

    if (!existeEditorial)
        throw `ERROR, NO EXISTE LA EDITORIAL ${nombreEditorial}`


    const editorial = await getElementByNombre(nombreEditorial, Editorial)

    await editorial[0].remove()
}










