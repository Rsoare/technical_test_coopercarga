import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../product.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from '../../dto/create-product.dto';
import { Product } from '../../entities/product.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateProductDto } from '../../dto/update-product.dto';

@Injectable()
export class ProductPrismaRepository implements ProductRepository {
   constructor(private prisma: PrismaService) {}

   async create(data: CreateProductDto): Promise<Product> {
      const product = new Product();

      Object.assign(product, {
         ...data,
      });

      const newProduct = await this.prisma.product.create({
         data: { ...product },
      });

      return plainToInstance(Product, newProduct);
   }

   async findAll(): Promise<Product[]> {
      const product: Product[] = await this.prisma.product.findMany({
         include: {
            available_sizes: true,
         },
      });
      return plainToInstance(Product, product);
   }

   async findOne(productId: string): Promise<Product> {
      const id: number = parseInt(productId);

      const product = await this.prisma.product.findUnique({
         where: { id },
         include: {
            available_sizes: true,
         },
      });

      return plainToInstance(Product, product);
   }

   async update(productId: string, data: UpdateProductDto): Promise<Product> {
      const id: number = parseInt(productId);

      const product = await this.prisma.product.update({
         where: { id },
         data: { ...data },
      });

      return plainToInstance(Product, product);
   }

   async delete(productId: string): Promise<void> {
      const id: number = parseInt(productId);

      await this.prisma.product.delete({
         where: { id },
      });
   }
}
