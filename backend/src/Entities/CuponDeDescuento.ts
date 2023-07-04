import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany, JoinTable } from "typeorm";
import { ObjectType, Field, ID, Float } from "type-graphql";
import { Factura } from "./Factura";


@ObjectType()
@Entity()
export class CuponDeDescuento extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    codigo!: string; 

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    cantidad_descuento!: number;

    @Field()
    @Column({
        default: false
    })
    cupon_utilizado!: boolean;

    @Field(type => Factura)
    @OneToMany((type) => Factura, (id_factura) => id_factura.cupon, {
        onUpdate: 'CASCADE'
    })
    @JoinTable({name: 'id_factura'})
    id_factura!: Factura[];

}