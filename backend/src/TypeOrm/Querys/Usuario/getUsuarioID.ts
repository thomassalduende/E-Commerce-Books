import { Users } from "../../../Entities/Users";

export async function getUsuarioID(id: number) {

    const usuario = await Users.find({
        where: {
            id: id
        }
    })

    return usuario;
    
}