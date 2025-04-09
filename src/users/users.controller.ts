import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the user", example: "1" })
  async findById(@Param("id") id: string) {
    try {
      return await this.usersService.findById(+id);
    } catch (error) {
      throw error;
    }
  }
}
