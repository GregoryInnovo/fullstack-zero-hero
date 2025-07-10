import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    description: 'Nombre del rol',
    example: 'ADMIN',
    minLength: 3,
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @ApiProperty({
    description: 'Descripción del rol',
    example: 'Rol con acceso total al sistema',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(0, 200)
  description?: string;

  @ApiProperty({
    description: 'Permisos asociados al rol',
    example: ['read:users', 'write:users'],
    type: [String],
    required: false,
  })
  @IsString({ each: true })
  @IsOptional()
  permissions?: string[];
}
