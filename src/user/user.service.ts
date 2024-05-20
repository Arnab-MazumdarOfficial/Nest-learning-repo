import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from 'src/DTO and Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(userEntity) private userEntityrepo: Repository<userEntity>){}

    create(email: string, password: string){
        const user = this.userEntityrepo.create({email,password})
        console.log("User---------->>",user);
        return this.userEntityrepo.save(user);
    }
}
