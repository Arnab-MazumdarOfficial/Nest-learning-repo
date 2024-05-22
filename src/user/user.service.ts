import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { userEntity } from 'src/DTO and Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(userEntity) private userEntityrepo: Repository<userEntity>) { }

    create(email: string, password: string) {
        const user = this.userEntityrepo.create({ email, password })
        console.log("User---------->>", user);
        return this.userEntityrepo.save(user);
    }

    findOne(id: number) {
        return this.userEntityrepo.findOne({ where: { id } });
    }

    find(email: string) {
        return this.userEntityrepo.find({ where: { email } })
    }

    async update(id: number, attrs: Partial<userEntity>) {
        const user = await this.userEntityrepo.find({ where: { id } });
        if (!user) {
            throw new Error('User not found for the specific id')
        }
        else{
            console.log("User-------->>",user);
        }
        Object.assign(user, attrs);
        console.log("After assigh user----->>",user);
        return await this.userEntityrepo.save(user);
    }

    async remove(id: number):Promise<any> {
        try{
            const user = await this.userEntityrepo.find({ where: { id } });
        if (!user) {
            throw `User not found for the specific id`;
        }
        const response = await this.userEntityrepo.remove(user)
        return Promise.resolve(response);
        }catch(error){
            console.log("Error--------->>",error)
                return Promise.reject(error);
        }
    }
}
