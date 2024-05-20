import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password:string;

    @Column()
    email:string;

    @AfterInsert()
    logStart(){
        console.log("Inserted user id-------->>",this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log("Inserted user id-------->>",this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log("Inserted user id-------->>",this.id);
    }
}