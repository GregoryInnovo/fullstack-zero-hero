import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a new user' })
  // @ApiBody({ type: CreateUserDto })
  // @ApiResponse({
  //   status: HttpStatus.CREATED,
  //   description: 'The user has been successfully created.',
  //   type: User,
  // })
  // @ApiResponse({
  //   status: HttpStatus.CONFLICT,
  //   description: 'Username or email already exists.',
  // })
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The create user' })
  @ApiResponse({ status: 404, description: 'Bad Request' })
  @ApiBody({
    description: 'Business creation data',
    schema: {
      example: {
        name: 'Test',
        email: 'test@gmail.com',
        password: '123456', 
        address: 'Test',
        phone: '3043348912',
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  // @Get()
  // @ApiOperation({ summary: 'Get all users' })
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'List of all users',
  //   type: [User],
  // })
  // async findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({status:200, description: 'Get all users'})
  async findAll(){
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiParam({
    name: 'id',
    description: 'The id of the user',
    type: 'number',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been found.',
    type: User,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }
}
