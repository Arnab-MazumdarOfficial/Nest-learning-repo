import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MassageController } from './massage/massage.controller';
import { MassageModule } from './massage/massage.module';
import { CpuModule } from './cpu/cpu.module';
import { PowerServiceModule } from './power_service/power_service.module';
import { DiskModule } from './disk/disk.module';
import { computerModule } from './computer/computer.module';
import { UserModule } from './user/user.module';
import { ReportModule } from './report/report.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './DTO and Entities/user.entity';
import { reportEntity } from './DTO and Entities/report.entity';

@Module({
  imports: [MassageModule, CpuModule, PowerServiceModule, DiskModule, computerModule, UserModule, ReportModule,TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [userEntity,reportEntity],
      synchronize: true,
      logging: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
