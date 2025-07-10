import { Test, TestingModule } from '@nestjs/testing';
import { AutenticationService } from './autentication.service';

describe('AutenticationService', () => {
  let service: AutenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutenticationService],
    }).compile();

    service = module.get<AutenticationService>(AutenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
