// src/auth/dto/login.dto.ts
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
