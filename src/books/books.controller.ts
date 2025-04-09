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
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Books")
@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBody({ type: CreateBookDto })
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      return await this.booksService.create(createBookDto);
    } catch (error) {
      throw new Error("Failed to create book");
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    try {
      return await this.booksService.findAll();
    } catch (error) {
      throw new Error("Failed to fetch books");
    }
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the book" })
  async findOne(@Param("id") id: string) {
    try {
      return await this.booksService.findOne(+id);
    } catch (error) {
      throw new Error("Failed to find book");
    }
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the book" })
  @ApiBody({ type: UpdateBookDto })
  async update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      return await this.booksService.update(+id, updateBookDto);
    } catch (error) {
      throw new Error("Failed to update book");
    }
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the book" })
  async remove(@Param("id") id: string) {
    try {
      return await this.booksService.remove(+id);
    } catch (error) {
      throw new Error("Failed to delete book");
    }
  }
}
