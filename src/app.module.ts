import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MassageController } from './massage/massage.controller';
import { MassageModule } from './massage/massage.module';

@Module({
  imports: [MassageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
