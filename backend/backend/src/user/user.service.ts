// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<User> {
    return this.prismaService.users.create({ data: user });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.prismaService.users.findUnique({ where: { email } });
  }
  async findOneByID(id: number): Promise<User | undefined> {
    return this.prismaService.users.findUnique({ where: { id } });
  }
  // Additional methods can be added as needed, such as:
  // async update(), async remove(), async findById(), etc.
}
