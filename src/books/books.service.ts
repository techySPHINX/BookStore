import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.prisma.book.create({ data: createBookDto });
    } catch (error) {
      throw new Error(`Failed to create book: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.book.findMany();
    } catch (error) {
      throw new Error(`Failed to fetch books: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.book.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to find book with ID ${id}: ${error.message}`);
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return await this.prisma.book.update({
        where: { id },
        data: updateBookDto,
      });
    } catch (error) {
      throw new Error(`Failed to update book with ID ${id}: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.book.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to delete book with ID ${id}: ${error.message}`);
    }
  }
}
