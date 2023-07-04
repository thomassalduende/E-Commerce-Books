import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { ObjectType, Field, ID} from "type-graphql";
import { Books } from "./Books";


@ObjectType()
@Entity()
export class Genero extends BaseEntity{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id_genero!: number;

    @Field()
    @Column({unique: true})
    nombre!: string;

    @Field({nullable: true})
    @Column('text')
    url_imagen!: string;
}