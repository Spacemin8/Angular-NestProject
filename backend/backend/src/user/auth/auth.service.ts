// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { TokenService } from '../../Token/token.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';
import { User } from '../user.entity';
import { Token } from 'src/Token/token.entity';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // Assume UserService is implemented
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async signup(signupDto: SignupDto): Promise<any> {
    // Check if the user already exists
    const userExists = await this.userService.findOneByEmail(signupDto.email);
    if (userExists) {
      throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);

    // Create a new user entity and save it to the database
    const user = new User();
    user.username = signupDto.username;
    user.email = signupDto.email;
    user.password = hashedPassword;
    await this.userService.create(user);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    // Find the user by email
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      return null;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      return null;
    }

    // Omit the password before returning the user object
    const { password, ...result } = user;
    return result;
  }
  async validateToken(accessToken: string): Promise<any> {
    try {
      const decodedToken = this.jwtService.verify(accessToken);
      const user = await this.userService.findOneByID(decodedToken.userId); // Example function to fetch user from database

      if (
        decodedToken.username === user.username &&
        decodedToken.email === user.email &&
        decodedToken.password === user.password
      ) {
        console.log('Token is valid.');
        return user;
        // Token is valid.
      }
    } catch (error) {
      return false; // Token is invalid or has expired
    }
  }
  async login(user: any): Promise<any> {
    const payload = { email: user.email, sub: user.id };
    const accesstoken = this.jwtService.sign(payload, {
      expiresIn: '1h',
      secret: process.env.ASECRET,
    });
    const refreshtoken = this.jwtService.sign(payload, {
      expiresIn: '24h',
      secret: process.env.RSECRET,
    });
    const token = new Token();
    token.accesstoken = accesstoken;
    token.refreshtoken = refreshtoken;
    await this.tokenService.create(token);
    console.log('success', accesstoken, refreshtoken);
    return { accesstoken, refreshtoken };
  }
}
