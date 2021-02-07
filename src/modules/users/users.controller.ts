import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { tbl_subject_dto } from 'src/utils/dto/tbl_subject_dto';
import { tbl_user_dto } from 'src/utils/dto/tbl_user_dto';
import { tbl_subject } from 'src/utils/schemas/tbl_subject.schema';
import { tbl_user } from 'src/utils/schemas/tbl_users.schema';
import { TblSubjectService } from './tbl-subject/tbl-subject.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    @Inject(UsersService)
    private readonly userService: UsersService;

    @Inject(TblSubjectService)
    private readonly subjectService: TblSubjectService

    @Post("/create-user")
    async creatUser(@Body() entity: tbl_user_dto): Promise<tbl_user>{
        return await this.userService.insert(entity);
    }

    @Get()
    async findAll(): Promise<tbl_user[]> {
        return await this.userService.getAll();
    }

    @Post("/create-subject")
    async creatSubject(@Body() entity: tbl_subject_dto): Promise<tbl_subject>{
        return await this.subjectService.insert(entity);
    }

    @Get("/list-subjects")
    async findAllSubject(): Promise<tbl_subject[]> {
        return await this.subjectService.getAll();
    }
}
