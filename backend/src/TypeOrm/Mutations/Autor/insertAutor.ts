import { Autor } from "../../../Entities/Autor";
import { existsNombre } from "../Utilities/Exists";
import { getElementByNombre } from "../Utilities/getElementByNombre";

export async function insertAutor(nombreAutor: string) : Promise<Autor>{

    const existeAutor = existsNombre(nombreAutor, Autor)
    const autor = new Autor()

    if (!existeAutor){
        
        autor.nombre = nombreAutor;

        await autor.save()
    }

    return await getElementByNombre(nombreAutor, Autor)
}