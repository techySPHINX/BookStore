import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";

@ApiTags("Customers")
@Controller("customers")
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiBody({ type: Object })
  create(@Body() data: any) {
    return this.customersService.create(data);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: "id", description: "ID of the customer" })
  findOne(@Param("id") id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "ID of the customer" })
  @ApiBody({ type: Object })
  update(@Param("id") id: string, @Body() data: any) {
    return this.customersService.update(+id, data);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "ID of the customer" })
  remove(@Param("id") id: string) {
    return this.customersService.remove(+id);
  }
}
