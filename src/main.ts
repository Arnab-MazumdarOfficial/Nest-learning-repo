import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
   { cors :true }
  );
  const config = new DocumentBuilder()
  .setTitle('Learning nest js in depth example')
  .setDescription('The  API description')
  .setVersion('1.0')
  .addTag('my-learning')
  .addBearerAuth({
    description: `Please enter token in following format: Bearer <JWT>`,
    name: 'Authorization',
    bearerFormat: 'Bearer',
    scheme: 'Bearer',
    type: 'http',
    in: 'Header'
  }, 'access-token')
  .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string,
    ) => methodKey
  };
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document,{
  swaggerOptions: {
    defaultModelsExpandDepth: -1, // Disables schemas section 
    displayRequestDuration: true
  }
});
  app.useGlobalPipes(
    new ValidationPipe()
  );
  app.enableShutdownHooks();
  await app.listen(3030);
  console.log("http://localhost:",3030);
}
bootstrap();
