import { Injectable } from '@nestjs/common';
import * as SvgCaptcha from 'svg-captcha';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCaptcha() {
    const captcha = SvgCaptcha.create({
      size: 4,
      width: 100,
      height: 40,
      background: '#ccc',
    });

    return captcha;
  }

  login() {
    return `login`;
  }
}
