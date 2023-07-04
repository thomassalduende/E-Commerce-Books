import { DataSource } from "typeorm";
import { Books } from "./Entities/Books";
import { Users } from "./Entities/Users";
import { Ciudad } from "./Entities/Ciudad";
import { Autor } from "./Entities/Autor";
import { Carrito } from "./Entities/Carrito";
import { CuponDeDescuento } from "./Entities/CuponDeDescuento";
import { Editorial } from "./Entities/Editorial";
import { Envio } from "./Entities/Envio";
import { Factura } from "./Entities/Factura";
import { Genero } from "./Entities/Genero";
import { LineaCarrito } from "./Entities/LineaCarrito";
import { LineaFactura } from "./Entities/LineaFactura";
import { Provincia } from "./Entities/Provincia";
import { Valoracion } from "./Entities/Valoracion";

import { Factura_detalle } from "./Entities/Factura_detalllada";
import { Direccion } from "./Entities/Direccion_user";
import { Opiniones } from "./Entities/Opinion_user";
import { Notificacion } from "./Entities/NotificarUser";
import { Favoritos } from "./Entities/Favoritos_user";

const { db } = require('./config');

export const ConnectionBD = new DataSource({
    type: 'postgres',
    username: db.username,
    password: db.password,
    host: db.host,
    port:db.port,
    database: db.database,
    entities: [Autor, Books, Carrito,
         Ciudad, CuponDeDescuento, Editorial, 
         Envio, Factura, Genero, 
         LineaCarrito, LineaFactura, 
         Provincia, Users, Valoracion, 
         Factura_detalle, Direccion, Opiniones, 
         Notificacion, Favoritos],

    synchronize: true,
    logging: true
})