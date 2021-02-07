import { Test, TestingModule } from '@nestjs/testing';
import { LangViService } from './lang-vi.service';

describe('LangViService', () => {
  let service: LangViService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangViService],
    }).compile();

    service = module.get<LangViService>(LangViService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
