import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { ApiTags, ApiBody, ApiParam } from "@nestjs/swagger";

@ApiTags("Books")
@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiBody({ type: CreateBookDto })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(":id")
  @ApiParam({ name: "id", description: "ID of the book" })
  findOne(@Param("id") id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "ID of the book" })
  @ApiBody({ type: UpdateBookDto })
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "ID of the book" })
  remove(@Param("id") id: string) {
    return this.booksService.remove(+id);
  }
}
