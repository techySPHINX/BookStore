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
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard) 
  findAll() {
    return this.booksService.findAll();
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiParam({ name: "id", description: "ID of the book" })
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard) 
  @ApiParam({ name: "id", description: "ID of the book" })
  @ApiBody({ type: UpdateBookDto })
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard) 
  @ApiParam({ name: "id", description: "ID of the book" })
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
