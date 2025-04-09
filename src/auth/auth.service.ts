import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(user: any) {
    try {
      const payload = { sub: user.id, email: user.email };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw error;
    }
  }

  async register(registerDto: any) {
    try {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const user = await this.usersService.create({
        email: registerDto.email,
        password: hashedPassword,
      });

      return await this.login(user);
    } catch (error) {
      throw error;
    }
  }
}
