import { PartialType } from '@nestjs/mapped-types';
import { CreateAutenticationDto } from './create-autentication.dto';

export class UpdateAutenticationDto extends PartialType(CreateAutenticationDto) {}
