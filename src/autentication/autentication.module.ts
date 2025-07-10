import { Module } from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { AutenticationController } from './autentication.controller';

@Module({
  controllers: [AutenticationController],
  providers: [AutenticationService],
})
export class AutenticationModule {}
