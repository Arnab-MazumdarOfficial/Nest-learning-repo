import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { reportEntity } from 'src/DTO and Entities/report.entity';

@Module({
  imports:[TypeOrmModule.forFeature([reportEntity])],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
