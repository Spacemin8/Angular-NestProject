import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Focus Products')
    .setDescription('The Focus API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = 4000; // Use the PORT environment variable if available, otherwise default to 3000
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
