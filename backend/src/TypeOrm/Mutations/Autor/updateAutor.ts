import { Autor } from "../../../Entities/Autor";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function updateAutor(nombre_orig: string, nombre: string){

    const autor = await getElementByNombre(nombre_orig, Autor)

    if (!autor){
        throw `ERROR, EL AUTOR CON NOMBRE ${nombre_orig} NO EXISTE`
    }

    if(!nombre_orig){
        nombre_orig = nombre;
    }
    
    await autor.save()
}