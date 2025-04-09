import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: any) {
    try {
      return await this.prisma.order.create({
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
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.order.findMany({
        include: {
          customer: true,
          books: {
            include: {
              book: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.order.findUnique({
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
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: any) {
    try {
      return await this.prisma.order.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.order.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async cancelOrder(id: number) {
    try {
      return await this.prisma.order.update({
        where: { id },
        data: { status: "CANCELLED" },
      });
    } catch (error) {
      throw error;
    }
  }
}
