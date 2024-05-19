import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageDto } from 'src/DTO and Entities/massage.dto';

@Controller('massage')
export class MassageController {
    constructor(private massageServise : MassageService){
    }
    
    // Create a new massage
    @Post('Create-a-massage')
    async createAMassage(@Body() body:MassageDto){
        console.log("Body========>>",body);
        return this.massageServise.create(body.content);
    }

    // find all massage
    @Get('find-all-massage')
    async findAllMassage(){
         return this.massageServise.findAll();
    }

    // find a massage by id
    @Get('/:id')
    async findAMassageByID(@Param('id') id: string){
        console.log("Id========>>",id);
        if(!id){
            throw new NotFoundException('id Not Found');
        }
        const data =  this.massageServise.findOne(id) ;
        if(!data){
            throw new NotFoundException('Data Not Found');
        }
        return data;
    }
}
