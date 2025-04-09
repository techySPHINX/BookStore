import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags, ApiBody } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password
      );
      return await this.authService.login(user);
    } catch (error) {
      throw error;
    }
  }

  @Post("register")
  @ApiBody({ type: RegisterDto })
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.authService.register(registerDto);
    } catch (error) {
      throw error;
    }
  }
}
