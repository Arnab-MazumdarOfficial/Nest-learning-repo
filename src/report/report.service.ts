import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { reportEntity } from 'src/DTO and Entities/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
    constructor(@InjectRepository(reportEntity) private reportRepo:Repository<reportEntity>){}

    
}
