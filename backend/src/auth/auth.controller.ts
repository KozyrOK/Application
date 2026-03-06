import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

}