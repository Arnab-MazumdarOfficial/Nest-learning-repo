import { Expose } from "class-transformer";

export class userDto{
    @Expose()
    email:string;

    @Expose()
    id:number;
}