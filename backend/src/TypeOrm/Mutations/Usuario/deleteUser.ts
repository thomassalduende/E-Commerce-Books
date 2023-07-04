import { Users } from "../../../Entities/Users";

export async function deleteUser(id: number) {

    const usuario = await Users.find({
        where: {
            id: id
        }
    })

    if(!usuario[0]){
        throw `ERROR, EL USUARIO CON DNI ${id} NO EXISTE`
    }

    await usuario[0].remove()
}