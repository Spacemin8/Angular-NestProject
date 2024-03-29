import { IsNotEmpty, IsString } from 'class-validator';
export class TokenDto {
  @IsNotEmpty()
  @IsString()
  accesstoken: string;

  @IsNotEmpty()
  @IsString()
  refreshtoken: string;
}
