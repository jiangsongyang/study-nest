import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'jsy',
      rolling: true,
      name: 'jsy.sid',
      cookie: {
        maxAge: 999999999,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
