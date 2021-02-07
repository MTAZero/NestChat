import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    checkLogin(userName: String, password: String){
        if (userName === "admin" && password === "123")
            return true 

        return false
    }
}
