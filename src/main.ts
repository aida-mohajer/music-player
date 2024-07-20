import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  // Make sure that the CORS (Cross-Origin Resource Sharing) is properly configured on the NestJS server. If the frontend is running on a different domain or port than the backend, you may need to enable CORS in your NestJS application
  // const server = express();
  const app = await NestFactory.create(
    AppModule,
    // , new ExpressAdapter(server)
  );
  // app.enableCors();

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API Description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
  console.log(`http://localhost:3000/`);
  console.log(`http://localhost:3000/doc/`);
}
bootstrap();
