// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService, UserService],
  exports: [UserService], // Export UserService so it can be used elsewhere
})
export class UserModule {}
