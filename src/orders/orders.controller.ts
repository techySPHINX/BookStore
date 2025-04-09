import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";

@ApiTags("Orders")
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiBody({ type: CreateOrderDto })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: "id", description: "ID of the order" })
  findOne(@Param("id") id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "ID of the order" })
  @ApiBody({ type: Object })
  update(@Param("id") id: string, @Body() data: any) {
    return this.ordersService.update(+id, data);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "ID of the order" })
  remove(@Param("id") id: string) {
    return this.ordersService.remove(+id);
  }

  @Patch(":id/cancel")
  @ApiParam({ name: "id", description: "ID of the order" })
  cancelOrder(@Param("id") id: string) {
    return this.ordersService.cancelOrder(+id);
  }
}
