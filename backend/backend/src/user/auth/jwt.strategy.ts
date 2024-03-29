// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants'; // Define your JWT constants here
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(req: any) {
    const authorizationHeader = req.headers.Authorization;
    if (!authorizationHeader) {
      throw new UnauthorizedException('Access token not provided');
    }
    const accesstoken = authorizationHeader.split(' ')[1]; // Extracting the token from the Authorization header
    // Now you can use the accessToken as needed

    // Your logic to validate the access token and retrieve the user
    // Example: validate the token against your authentication service
    const user = await this.authService.validateToken(accesstoken);
    if (!user) {
      throw new UnauthorizedException('Invalid access token');
    }

    return user;
  }
}
