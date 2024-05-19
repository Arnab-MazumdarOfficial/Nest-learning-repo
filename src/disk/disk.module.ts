import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerServiceModule } from 'src/power_service/power_service.module';

@Module({
  imports:[PowerServiceModule],
  providers: [DiskService],
  exports:[DiskService]
})
export class DiskModule {}
