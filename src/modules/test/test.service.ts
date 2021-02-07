import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TestService {
    private readonly logger = new Logger(TestService.name)

    calSum( a: any, b: any ): any{
        this.logger.debug(`Sum(${a}, ${b}) = ${(a+b)}`)
        return a + b
    }

}
