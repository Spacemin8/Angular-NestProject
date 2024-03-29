import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './user/auth/auth.module';
import { AuthController } from './user/auth/auth.controller';
import { TokenModule } from './Token/token.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, TokenModule, ProductModule],
  controllers: [AuthController],
  providers: [AppService],
})
export class AppModule {}
