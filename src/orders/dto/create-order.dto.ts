import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
  @ApiProperty({ description: "Customer ID" })
  customerId: number;

  @ApiProperty({ description: "Array of Book IDs" })
  bookIds: number[];

  @ApiProperty({ description: "Order status", example: "PENDING" })
  status?: string;
}
