import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdbModelService } from 'src/interface/idb-model-service.interface';
import { tbl_subject_dto } from 'src/utils/dto/tbl_subject_dto';
import { tbl_subject, tbl_Subject_Document } from 'src/utils/schemas/tbl_subject.schema';

@Injectable()
export class TblSubjectService implements IdbModelService<tbl_subject, tbl_subject_dto> {
    constructor(
        @InjectModel(tbl_subject.name) private readonly subjectModel: Model<tbl_Subject_Document>,
    ) {}

    async getAll(): Promise<tbl_subject[]> {
        return this.subjectModel.find().exec()
    }

    getOne(id: string): Promise<tbl_subject> {
        throw new Error('Method not implemented.');
    }

    update(id: string) {
        throw new Error('Method not implemented.');
    }

    remove(id: string) {
        throw new Error('Method not implemented.');
    }

    async insert(entity: tbl_subject_dto): Promise<tbl_subject> {
        const _entity = new this.subjectModel(entity)
        return _entity.save();
    }
    
}
