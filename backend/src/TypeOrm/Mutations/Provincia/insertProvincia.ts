import { Provincia } from "../../../Entities/Provincia";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertProvincia(nombreProvincia: string) {

    const existeProv = await existsNombre(nombreProvincia, Provincia)

    if (existeProv){
        throw `ERROR, LA PROVINCIA ${nombreProvincia} YA EXISTE`
    }
    const provincia = new Provincia();
    provincia.nombre = nombreProvincia;

    
    await provincia.save()


}