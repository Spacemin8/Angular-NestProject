import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProtectedResource(@Request() req): string {
    // req.user contains the payload of the validated JWT token
    return `Your protected resource. User ID: ${req.user.userId}`;
  }
}
