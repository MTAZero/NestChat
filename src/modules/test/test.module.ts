import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { LangViService } from './lang-vi/lang-vi.service';
import { LangEnService } from './lang-en/lang-en.service';

@Module({
  providers: [TestService, LangViService, LangEnService],
  exports: [TestService]
})
export class TestModule {}
