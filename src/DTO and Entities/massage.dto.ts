import { IsString } from "class-validator";


export class MassageDto{
    @IsString()
    content: string
}