
import { Entity ,BaseEntity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { ObjectType, Int, ID, Field, Float } from "type-graphql";
import { Editorial } from "./Editorial";
import { Genero } from "./Genero";
import { Autor } from "./Autor";
import { Valoracion } from "./Valoracion";
import { Opiniones } from "./Opinion_user"
import { Factura_detalle } from "./Factura_detalllada";

@ObjectType()
@Entity()
export class Books extends BaseEntity {
    
    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    isbn!: string;

    @Field({nullable: true})
    @Column('text')
    url_imagen!: string;

    @Field({nullable: true})
    @Column()
    nombre!:string;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    precio!: number;

    @Field(type => Int, {nullable: true})
    @Column()
    stock!:number;

    @Field(type => String)
    @Column()
    descripcion!: string;

    @Field(type => String, {nullable: true})
    @Column({nullable: true})
    fecha_ingreso: string;

    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
    })
    descuento!: number;

    // @Field(type => Genero)
    // @OneToMany(() => Genero, (genero) => genero.id_genero, {
    //     onUpdate: 'CASCADE',
    //     onDelete: 'RESTRICT'
    // })
    // @JoinColumn({name: 'id_genero'})
    // genero!: Genero[];

    @Field(type => [Genero], {nullable: true})
    @ManyToMany((type) => Genero, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "genero_book",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_genero'
        }
    })
    genero!: Genero[];

    @Field(type => [Autor], {nullable: true})
    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "autor_book",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    })
    @JoinColumn({
        name: 'id_autor',
    })
    autor!: Autor[];

    @OneToMany(() => Valoracion, (valoracion) => valoracion.books, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public valoracion!: Valoracion[];

    
    @Field(type => Editorial, {nullable: true})
    @ManyToOne(() => Editorial, (editorial) => editorial.id_editorial, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_editoral'})
    editorial!: Editorial;

    // @ManyToMany((type) => Autor, (autor) => autor.id_autor,{
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE'
    // })
    // @Field(type => [Autor], {nullable: true})
    // @JoinColumn({name: 'id_autor'})
    // autor!: Autor[];

    
    @OneToMany((type) => Factura_detalle, (factura_detalle) => factura_detalle.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public factura_detalle: Factura_detalle[];

    @Field(type => [Opiniones])
    @OneToMany((type) => Opiniones, (opiniones) => opiniones.book, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    public opiniones: Opiniones[];
}