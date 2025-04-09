import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookDto: any) {
    return this.prisma.book.create({ data: createBookDto });
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findOne(id: number) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async update(id: number, updateBookDto: any) {
    return this.prisma.book.update({ where: { id }, data: updateBookDto });
  }

  async remove(id: number) {
    return this.prisma.book.delete({ where: { id } });
  }
}
