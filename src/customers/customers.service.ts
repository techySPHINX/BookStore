import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    try {
      return await this.prisma.customer.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.customer.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.customer.findUnique({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: any) {
    try {
      return await this.prisma.customer.update({ where: { id }, data });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.customer.delete({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
