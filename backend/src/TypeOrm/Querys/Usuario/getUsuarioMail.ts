import { Users } from "../../../Entities/Users";

export async function getUsuarioMail(email: string) {

    const usuario = await Users.find({
        where: {
            email: email
        }
    })

    return usuario[0];
}