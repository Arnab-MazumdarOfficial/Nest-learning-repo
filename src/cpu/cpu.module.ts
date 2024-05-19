import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerServiceModule } from 'src/power_service/power_service.module';

@Module({
  imports:[PowerServiceModule],
  providers: [CpuService],
  exports:[CpuService]
})
export class CpuModule {}
