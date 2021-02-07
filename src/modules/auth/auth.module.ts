import { Module } from '@nestjs/common';
import { LangEnService } from '../test/lang-en/lang-en.service';
import { LangViService } from '../test/lang-vi/lang-vi.service';
import { TestModule } from '../test/test.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TestModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'ILangProcessor',
      useClass: LangEnService
    },
    AuthService
  ]
})
export class AuthModule {}
