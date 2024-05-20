import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class reportEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    price:number
}