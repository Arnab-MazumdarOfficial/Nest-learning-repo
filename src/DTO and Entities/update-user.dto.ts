import { IsEmail, IsOptional, IsString } from "class-validator";

export class updateUserDto{
    
    @IsString()
    @IsOptional()
    password:string

    @IsEmail()
    @IsOptional()
    email:string;
}