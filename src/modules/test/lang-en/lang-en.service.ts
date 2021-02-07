import { Injectable } from '@nestjs/common';
import { IlangProcessor } from 'src/interface/ilang-processor.interface';

@Injectable()
export class LangEnService implements IlangProcessor {
    sayHello(name: string) {
        return `hello ${name}`
    }
}
