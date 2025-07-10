import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verificar si el usuario ya existe
    const existingUser = await this.usersRepository.findOne({
      where: [
        { email: createUserDto.email },
      ],
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Crear nuevo usuario
    const user = this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    });

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      select: [
        'id',
        'name',
        'email',
        'address',
        'phone',
      ],
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: [
        'id',
        'name',
        'email',
        'address',
        'phone',
      ],
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return this.usersRepository.save({
      ...user,
      ...updateUserDto,
    });
  }
  // async delete(id: number): Promise<User> {
  //   const result = await this.usersRepository.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return ;
  // }
}
