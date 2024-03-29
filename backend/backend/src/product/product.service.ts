import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async create(products: Products) {
    return this.prismaService.products.create({ data: products });
  }

  async findAll() {
    return this.prismaService.products.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.products.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismaService.products.update({
      where: { id: id },
      data: updateProductDto,
    });
  }
  async Delete(id: number) {
    return this.prismaService.products.delete({ where: { id: id } });
  }
}
