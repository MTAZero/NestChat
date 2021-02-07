import { Module } from '@nestjs/common';
import { TestModule } from '../test/test.module';
import { TestService } from '../test/test.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TestModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
