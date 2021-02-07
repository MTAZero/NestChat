import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdbModelService } from 'src/interface/idb-model-service.interface';
import { tbl_user_dto } from 'src/utils/dto/tbl_user_dto';
import { tblUserDocument, tbl_user } from 'src/utils/schemas/tbl_users.schema';

@Injectable()
export class UsersService implements IdbModelService<tbl_user, tbl_user_dto> {
    constructor(
        @InjectModel(tbl_user.name) private readonly userModel: Model<tblUserDocument>,
    ) {}
    
    async getAll(): Promise<tbl_user[]> {
        return this.userModel.find().exec()
    }
    
    getOne(id: string): Promise<tbl_user> {
        throw new Error('Method not implemented.');
    }

    update(id: string) {
        throw new Error('Method not implemented.');
    }

    remove(id: string) {
        throw new Error('Method not implemented.');
    }

    async insert(entity: tbl_user_dto) {
        const user_entity = new this.userModel(entity)
        return user_entity.save();
    }
}
