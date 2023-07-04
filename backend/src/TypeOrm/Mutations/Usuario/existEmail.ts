import { Users } from "../../../Entities/Users";


export async function existEmail(email: string) {

    const user = await Users.find({
        where: {
            email: email
        }
    })
    
    return email[0]? true : false;
}