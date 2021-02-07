import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { tbl_user_dto } from 'src/utils/dto/tbl_user_dto';
import { tbl_user } from 'src/utils/schemas/tbl_users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    @Inject(UsersService)
    private readonly userService: UsersService;

    @Post("/create-user")
    async creatUser(@Body() entity: tbl_user_dto): Promise<tbl_user>{
        return await this.userService.insert(entity);
    }

    @Get()
    async findAll(): Promise<tbl_user[]> {
        return await this.userService.getAll();
    }
}
