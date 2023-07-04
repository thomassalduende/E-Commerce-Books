import { Ciudad } from '../../../Entities/Ciudad';
import { Direccion } from '../../../Entities/Direccion_user';
import { Users } from '../../../Entities/Users';


export async function agregarDireccionUser(id: number, nombre:string,  dni: string, direccion: string, informacion: string, telefono: string, cod_postal: number) {

    let usuario = await Users.find({
        relations: {
            direccion: true
        },
        where: {
            id: id,
        }
    })

    let Direc = await Direccion.find({
        where: {
            users: {
                id: usuario[0].id
            }
        }
    })

    const ciudad = await Ciudad.find({
        where: {
            cod_postal: cod_postal
        }
    })
    console.log(ciudad[0])

    let Direcciones = new Direccion();

    if (!Direc[0] && ciudad[0]){
        Direcciones.nombre = nombre;
        Direcciones.dni = dni;
        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];
        Direcciones.users = usuario[0];

        await Direcciones.save()

    }else if(usuario[0].direccion && ciudad[0]){

        Direcciones = Direc[0]
        Direcciones.dni = dni;
        Direcciones.direccion = direccion;
        Direcciones.AgregarInfo = informacion;
        Direcciones.telefono = telefono;
        Direcciones.ciudad = ciudad[0];

        await Direcciones.save()
    }

    usuario = await Users.find({
        relations: {
            direccion: {
                ciudad: {
                    provincia: true
                }
            }
        },
        where: {
            id: id
        }
    })

    return usuario



    
}