import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { TestModule } from './modules/test/test.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CatModule, TestModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
