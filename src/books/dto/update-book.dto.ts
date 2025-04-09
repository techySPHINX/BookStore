import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty({ description: "The title of the book", required: false })
  title?: string;

  @ApiProperty({ description: "The author of the book", required: false })
  author?: string;

  @ApiProperty({ description: "The category of the book", required: false })
  category?: string;

  @ApiProperty({
    description: "The price of the book",
    example: 19.99,
    required: false,
  })
  price?: number;

  @ApiProperty({
    description: "The rating of the book",
    example: 4.5,
    required: false,
  })
  rating?: number;

  @ApiProperty({
    description: "The published date of the book",
    example: "2025-04-09T00:00:00Z",
    required: false,
  })
  publishedAt?: Date;
}
