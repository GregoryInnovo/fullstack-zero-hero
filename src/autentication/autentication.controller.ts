import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AutenticationService } from './autentication.service';
import { CreateAutenticationDto } from './dto/create-autentication.dto';
import { UpdateAutenticationDto } from './dto/update-autentication.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('autentication')
export class AutenticationController {
  constructor(private readonly autenticationService: AutenticationService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid data' })
  @ApiResponse({ status: 409, description: 'Conflict - User already exists' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  register(@Body() createAutenticationDto: CreateAutenticationDto) {
    return this.autenticationService.create(createAutenticationDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid credentials',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Wrong credentials' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  login(@Body() createAutenticationDto: CreateAutenticationDto) {
    return this.autenticationService.create(createAutenticationDto);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  logout() {
    return this.autenticationService.findAll();
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Not logged in' })
  @ApiResponse({ status: 404, description: 'Profile not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  getProfile() {
    return this.autenticationService.findAll();
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid refresh token',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  refreshToken() {
    return this.autenticationService.findAll();
  }

  @Post('forgot-password')
  @ApiOperation({ summary: 'Request password reset' })
  @ApiResponse({ status: 200, description: 'Password reset email sent' })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid email' })
  @ApiResponse({ status: 404, description: 'User not found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  forgotPassword() {
    return this.autenticationService.findAll();
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password with token' })
  @ApiResponse({ status: 200, description: 'Password reset successful' })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid data' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid token' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  resetPassword() {
    return this.autenticationService.findAll();
  }
}
