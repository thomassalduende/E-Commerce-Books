import { existsNombre } from "../Utilities/Exists";
import { Genero } from "../../../Entities/Genero";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertGenero(nombreGenero: string, url_imagen: string) : Promise<Genero>{

    const existeGenero = existsNombre(nombreGenero, Genero)
    const genero = new Genero();

    if(!existeGenero){
        
        genero.nombre = nombreGenero;
        genero.url_imagen = url_imagen;

        await genero.save()
    }

    return getElementByNombre(nombreGenero, Genero)

}