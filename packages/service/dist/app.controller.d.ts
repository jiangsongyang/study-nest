import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCaptcha(res: any, session: any): string;
    login(): string;
}
