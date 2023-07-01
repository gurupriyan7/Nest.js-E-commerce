import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.CLIENT_URL ?? '', 'http://localhost:3000'],
  });

  const port = appConfig.port || 5000;
  await app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
}
bootstrap();
