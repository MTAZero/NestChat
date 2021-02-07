import { Inject, Injectable } from '@nestjs/common';
import { IlangProcessor } from 'src/interface'

@Injectable()
export class AuthService {
    private readonly langService : IlangProcessor;

    constructor(@Inject('ILangProcessor') langService: IlangProcessor){
        this.langService = langService;
    }

    checkLogin(userName: String, password: String){
        if (userName === "admin" && password === "123")
            return true 

        return false
    }

    getSayHello(name: string){
        return this.langService.sayHello(name);
    }
}
