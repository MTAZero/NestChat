import { Injectable } from '@nestjs/common';
import { IlangProcessor } from 'src/interface/ilang-processor.interface';

@Injectable()
export class LangViService implements IlangProcessor {

    sayHello(name: string){
        return `Xin chào ${name}`
    }

}
