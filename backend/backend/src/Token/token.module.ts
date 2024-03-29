// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from './token.service';

@Module({
  imports: [],
  providers: [PrismaService, TokenService],
  exports: [TokenService], // Export UserService so it can be used elsewhere
})
export class TokenModule {}
