import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({ description: "The title of the book" })
  title: string;

  @ApiProperty({ description: "The author of the book" })
  author: string;

  @ApiProperty({ description: "The category of the book" })
  category: string;

  @ApiProperty({ description: "The price of the book", example: 19.99 })
  price: number;

  @ApiProperty({ description: "The rating of the book", example: 4.5 })
  rating?: number;

  @ApiProperty({
    description: "The published date of the book",
    example: "2025-04-09T00:00:00Z",
  })
  publishedAt: Date;
}
