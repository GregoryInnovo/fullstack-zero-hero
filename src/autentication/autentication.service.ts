import { Injectable } from '@nestjs/common';
import { CreateAutenticationDto } from './dto/create-autentication.dto';
import { UpdateAutenticationDto } from './dto/update-autentication.dto';

@Injectable()
export class AutenticationService {
  create(createAutenticationDto: CreateAutenticationDto) {
    return 'This action adds a new autentication';
  }

  findAll() {
    return `This action returns all autentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autentication`;
  }

  update(id: number, updateAutenticationDto: UpdateAutenticationDto) {
    return `This action updates a #${id} autentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} autentication`;
  }
}
