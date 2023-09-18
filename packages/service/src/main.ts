import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

function GlobalMiddleWare(req, res, next) {
  console.log(`global middle ware`);

  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleWare);
  app.use(
    session({
      secret: 'jsy',
      resave: true,
      saveUninitialized: true,
      cookie: {
        sameSite: 'strict', // 或 'lax' 或 'none'（如果需要在跨站点情况下设置cookie）
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
