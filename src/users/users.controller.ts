import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags, ApiParam } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(":id")
  @ApiParam({ name: "id", description: "ID of the user", example: "1" }) 
  async findById(@Param("id") id: string) {
    return this.usersService.findById(+id);
  }
}
