import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { tbl_user, UserSchema } from 'src/utils/schemas/tbl_users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: tbl_user.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
