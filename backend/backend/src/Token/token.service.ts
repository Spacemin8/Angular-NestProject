import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Token } from './token.entity';

@Injectable()
export class TokenService {
  constructor(private prismaService: PrismaService) {}

  async create(token: Token): Promise<Token> {
    return this.prismaService.token.create({ data: token });
  }

  async findOneByToken(accesstoken: string): Promise<Token | undefined> {
    return this.prismaService.token.findUnique({ where: { accesstoken } });
  }
  async refreshAcess(refreshtoken: any) {
    const tokenid = await this.prismaService.token.findFirst({
      where: { refreshtoken },
    });
    return tokenid;
  }
  // Additional methods can be added as needed, such as:
  // async update(), async remove(), async findById(), etc.
}
