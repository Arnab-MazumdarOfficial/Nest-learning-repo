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

@Module({
  imports: [MassageModule, CpuModule, PowerServiceModule, DiskModule, computerModule, UserModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
