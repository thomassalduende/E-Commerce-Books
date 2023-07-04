import { Genero } from "../../../Entities/Genero";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function updateGenero(nombre_orig: string, nombre: string, url_imagen: string) {

    const genero = await getElementByNombre(nombre_orig, Genero)

    if (nombre && nombre.length > 0){
        genero.nombre = nombre;
    }

    if (url_imagen && url_imagen.length > 0){
        genero.url_imagen = url_imagen;
    }

    await genero.save()
    
}










