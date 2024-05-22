import { BadRequestException, Injectable } from '@nestjs/common';
import { Exception } from 'handlebars';
import { UserService } from 'src/user/user.service';

@Injectable()
export class UserAuthService {
    constructor(private userService: UserService) { }

    async signUp(email: string, password: string) {
        const user = await this.userService.find(email);

        if(user.length){
            throw new BadRequestException('Email Id Already Taken by another user!!....');
        }
    }

    async singIn() {

    }
}
