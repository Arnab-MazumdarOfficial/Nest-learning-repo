import { Module } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageController } from './massage.controller';
import { MasssageRepository } from './massage.repository';

@Module({
  controllers:[MassageController],
  providers: [MassageService,MasssageRepository]
})
export class MassageModule {}
