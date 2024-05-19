import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
   { cors :true }
  );
  app.useGlobalPipes(
    new ValidationPipe()
  );
  app.enableShutdownHooks();
  await app.listen(3030);
  console.log("http://localhost:",3030);
}
bootstrap();
