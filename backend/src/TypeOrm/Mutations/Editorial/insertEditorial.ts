import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";
import { Editorial } from "../../../Entities/Editorial";

export async function insertEditorial(nombreEditorial: string) : Promise<Editorial> {
    
    const existeEditorial = await existsNombre(nombreEditorial, Editorial)

    if(!existeEditorial){

        const editorial = new Editorial();
        editorial.nombre = nombreEditorial;
        await editorial.save()

    }
    return getElementByNombre(nombreEditorial, Editorial)
}