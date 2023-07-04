

export async function updateAutor(id: number, nombre: string) {

    try{
        return `El autor fue modificado con exito`;
    }
    catch(error){
        return error;
    }
    
}