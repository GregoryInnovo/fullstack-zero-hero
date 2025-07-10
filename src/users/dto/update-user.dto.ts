import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    phone?: string | undefined;
}
