import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { userDto } from 'src/DTO and Entities/user.dto';
import { UserService } from './user.service';

@ApiTags('auth')
@Controller('auth')
export class UserController {
    constructor(private userService:UserService){}

    @Post('sign-up')
    async createUser(@Body() body: userDto){
        console.log("body-------->>",body);
        this.userService.create(body.email,body.password);
    }
}
