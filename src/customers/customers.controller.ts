import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Customers")
@Controller("customers")
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: Object })
  async create(@Body() data: any) {
    try {
      return await this.customersService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    try {
      return await this.customersService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the customer" })
  async findOne(@Param("id") id: string) {
    try {
      return await this.customersService.findOne(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the customer" })
  @ApiBody({ type: Object })
  async update(@Param("id") id: string, @Body() data: any) {
    try {
      return await this.customersService.update(+id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the customer" })
  async remove(@Param("id") id: string) {
    try {
      return await this.customersService.remove(+id);
    } catch (error) {
      throw error;
    }
  }
}
