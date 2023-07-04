import { Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Field, Int, ObjectType, } from "type-graphql";



@ObjectType()
@Entity()
export class Autor extends BaseEntity {

    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id_autor!: number;

    @Field()
    @Column({unique: true})
    nombre!: string;
}