import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: any) {
    return this.prisma.order.create({
      data: {
        customerId: createOrderDto.customerId,
        books: {
          create: createOrderDto.bookIds.map((bookId: number) => ({
            book: {
              connect: {
                id: bookId,
              },
            },
          })),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        customer: true,
        books: {
          include: {
            book: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        books: {
          include: {
            book: true,
          },
        },
      },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.order.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }

  async cancelOrder(id: number) {
    return this.prisma.order.update({
      where: { id },
      data: { status: "CANCELLED" },
    });
  }
}
