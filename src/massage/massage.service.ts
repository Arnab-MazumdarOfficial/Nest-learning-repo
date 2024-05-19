import { Injectable } from '@nestjs/common';
import { MasssageRepository } from './massage.repository';

@Injectable()
export class MassageService {
    constructor(private massageRepository:MasssageRepository){}

    findOne(id:string){
        return this.massageRepository.findOne(id);
    }

    findAll(){
        return this.massageRepository.findAll();
    }

    create(massage:string){
        return this.massageRepository.create(massage);
    }
}
