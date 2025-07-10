import { Test, TestingModule } from '@nestjs/testing';
import { AutenticationController } from './autentication.controller';
import { AutenticationService } from './autentication.service';

describe('AutenticationController', () => {
  let controller: AutenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutenticationController],
      providers: [AutenticationService],
    }).compile();

    controller = module.get<AutenticationController>(AutenticationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
