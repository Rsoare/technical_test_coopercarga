import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
   const app = await NestFactory.create(AppModule, { cors: true });

   const config = new DocumentBuilder()
      .setTitle('List contact API')
      .setDescription('Project Full Stack M6-S2')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api/docs', app, document);

   app.useGlobalPipes(
      new ValidationPipe({ whitelist: true }),
      new ValidationPipe({
         transform: true,
         transformOptions: { groups: ['transform'] },
      }),
   );

   await app.listen(3000);
}
bootstrap();
