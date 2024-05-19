import { Module } from '@nestjs/common';
import { PowerServiceService } from './power_service.service';

@Module({
  providers: [PowerServiceService],
  exports:[PowerServiceService]
})
export class PowerServiceModule {}
