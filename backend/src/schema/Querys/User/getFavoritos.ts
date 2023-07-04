import { verify } from "jsonwebtoken";
import { getFavoritos } from "../../../TypeOrm/Querys/Usuario/getFavoritos";
import { SendFavoritos } from "../../../TypesDefs/SendFavoritos";


export async function GetFavoritos(tokenUser: string) {

    const message = new SendFavoritos();

    try {

        const id = parseInt(<string>verify(tokenUser, 'secret-key'))

        const favoritos = await getFavoritos(id);

        message.message = 'Favoritos obtenidos'
        message.success = true;
        message.favoritos = favoritos || [];

        return message;
    }catch(error: any) {
        message.message = error;
        message.success = false;

        return message;
    }
    
}