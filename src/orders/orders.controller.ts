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
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Orders")
@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateOrderDto })
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return await this.ordersService.create(createOrderDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    try {
      return await this.ordersService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the order" })
  async findOne(@Param("id") id: string) {
    try {
      return await this.ordersService.findOne(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the order" })
  @ApiBody({ type: Object })
  async update(@Param("id") id: string, @Body() data: any) {
    try {
      return await this.ordersService.update(+id, data);
    } catch (error) {
      throw error;
    }
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the order" })
  async remove(@Param("id") id: string) {
    try {
      return await this.ordersService.remove(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(":id/cancel")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the order" })
  async cancelOrder(@Param("id") id: string) {
    try {
      return await this.ordersService.cancelOrder(+id);
    } catch (error) {
      throw error;
    }
  }
}
