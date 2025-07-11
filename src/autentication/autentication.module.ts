import { Module } from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { AutenticationController } from './autentication.controller';
import { Autentication } from './entities/autentication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Autentication])],
  controllers: [AutenticationController],
  providers: [AutenticationService],
  exports: [AutenticationService],
})
export class AutenticationModule {}
