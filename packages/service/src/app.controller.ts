import { Controller, Get, Post, Res, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('captcha')
  getCaptcha(@Res() res, @Session() session) {
    const { data, text } = this.appService.getCaptcha();

    session.code = text

    res.type('image/svg+xml');
    res.send(data);

    return data;
  }

  @Post('login')
  login(){
    return this.appService.login()
  }
}
