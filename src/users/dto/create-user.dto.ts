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
  

  // @ApiProperty({
  //   example: 'john_doe',
  //   description: 'Unique username for the user',
  // })
  // @IsString()
  // @MinLength(3)
  // username: string;

  // @ApiProperty({
  //   example: 'john@example.com',
  //   description: 'Email address of the user',
  // })
  // @IsEmail()
  // email: string;

  // @ApiProperty({
  //   example: 'password123',
  //   description: 'User password (will be hashed)',
  //   minLength: 6,
  // })
  // @IsString()
  // @MinLength(6)
  // password: string;

  // @ApiProperty({
  //   example: 'John Doe',
  //   description: 'Full name of the user',
  //   required: false,
  // })
  // @IsString()
  // @IsOptional()
  // fullName?: string;
}
