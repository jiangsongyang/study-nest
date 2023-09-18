"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
function GlobalMiddleWare(req, res, next) {
    console.log(`global middle ware`);
    next();
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(GlobalMiddleWare);
    app.use(session({
        secret: 'jsy',
        resave: true,
        saveUninitialized: true,
        cookie: {
            sameSite: 'strict',
        },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map