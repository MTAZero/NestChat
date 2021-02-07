import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { tbl_subject, tbl_subject_schema } from 'src/utils/schemas/tbl_subject.schema';
import { tbl_user, UserSchema } from 'src/utils/schemas/tbl_users.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TblSubjectService } from './tbl-subject/tbl-subject.service';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {
        name: tbl_user.name,
        schema: UserSchema
      },
      {
        name: tbl_subject.name,
        schema: tbl_subject_schema
      }
    ]
  )],
  controllers: [UsersController],
  providers: [UsersService, TblSubjectService]
})
export class UsersModule { }
