import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // nodejs는 main.ts에서 시작하고 Appmodule에서 
  // 어플리케이션을 생성한다. 
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
