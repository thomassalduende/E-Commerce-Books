import { ObjectType, Field, Int} from "type-graphql";
import { Entity ,BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Ciudad } from "./Ciudad";
import { Users } from "./Users";

@ObjectType()
@Entity()
export class Direccion extends BaseEntity{

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    nombre: string;

    @Field()
    @Column()
    dni: string;
    
    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column()
    AgregarInfo!: string;

    @Field()
    @Column()
    telefono!: string;

    @ManyToOne((type) => Users, (user) => user.id, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'id_user'})
    users!: Users;

    @Field(type => Ciudad)
    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name: 'cod_postal'})
    ciudad!: Ciudad;
}

