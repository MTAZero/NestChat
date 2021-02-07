import { Test, TestingModule } from '@nestjs/testing';
import { LangEnService } from './lang-en.service';

describe('LangEnService', () => {
  let service: LangEnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangEnService],
    }).compile();

    service = module.get<LangEnService>(LangEnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
