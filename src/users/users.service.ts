import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    try {
      return await this.prisma.user.findUnique({ where: { email } });
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return await this.prisma.user.findUnique({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async create(data: any) {
    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      throw error;
    }
  }
}
