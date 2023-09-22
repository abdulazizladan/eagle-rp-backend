import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Eagle RP')
    .setDescription('An integrated resource planner for organizations.')
    .setVersion('1.0')
    .setContact("Abdulaziz Ladan", "eagle-rp.dem.web.app", "abdulazizladan@gmail.com")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();