import { Test, TestingModule } from '@nestjs/testing';
import { TblSubjectService } from './tbl-subject.service';

describe('TblSubjectService', () => {
  let service: TblSubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TblSubjectService],
    }).compile();

    service = module.get<TblSubjectService>(TblSubjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
