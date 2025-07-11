import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {

  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
}
