import { Controller, Get, Post, Body, Logger, UseInterceptors, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { TestService } from '../test/test.service';
import { IlangProcessor } from 'src/interface'

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);

    @Inject(TestService)
    private readonly testService;
    
    @Inject(AuthService)
    private readonly authService;

    @Inject("ILangProcessor")
    private readonly langService: IlangProcessor;

    @Post("login")
    @UseInterceptors(FileInterceptor('file'))
    login(@Body() body: any): string {
        this.logger.debug("body : " + body.username + " ; " + body.password)

        this.testService.calSum(299,324);

        let { username, password } = body

        if (this.authService.checkLogin(username, password))
            return "Login Success"

        return "Login Fail"
    }

    @Get("say-hello")
    sayHello(): string{
        return this.langService.sayHello("Bùi Xuân Thuỷ")
    }

}
