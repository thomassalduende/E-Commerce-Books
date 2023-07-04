import { Entity, BaseEntity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Books } from "./Books";

@ObjectType()
@Entity()
export class Editorial extends BaseEntity{

    @Field(type => ID)
    @PrimaryColumn()
    id_editorial!: number;

    @Field()
    @Column({unique: true})
    nombre!: string;
}