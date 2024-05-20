import { ApiProperty } from "@nestjs/swagger";

export class userSwaggerEntity{
    

    @ApiProperty({
        example:"abc@email.com",
        description:"This this email"
    })
    email:string;

    @ApiProperty({
        example:"abc@123",
        description:"This this password"
    })
    password:string;
}