import { Users } from "../../../Entities/Users";

export async function getAllUsuarios() {

    const usuario = await Users.find()

    return usuario;
    
}