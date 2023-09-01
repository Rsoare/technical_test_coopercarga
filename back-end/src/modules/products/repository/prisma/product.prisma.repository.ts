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
         data: {
            ...product,
            sizes: {
               create: data.sizes?.map((size) => ({ size })) || [],
            },
         },
         include: {
            sizes: true,
         },
      });

      const sizeArray = newProduct.sizes.map((size) => size.size);

      const response = Object.assign({}, newProduct, { sizes: sizeArray });

      return plainToInstance(Product, response);
   }

   async findAll(): Promise<Product[]> {
      const products = await this.prisma.product.findMany({
         include: {
            sizes: true,
         },
      });

      const newProducts = products.map((product) => {
         const sizeArray = product.sizes.map((size) => size.size);

         const response = Object.assign({}, product, { sizes: sizeArray });

         return response;
      });

      return plainToInstance(Product, newProducts);
   }

   async findOne(productId: string): Promise<Product> {
      const id: number = parseInt(productId);

      const product = await this.prisma.product.findUnique({
         where: { id },
         include: {
            sizes: true,
         },
      });

      const sizeArray = product.sizes.map((size) => size.size);

      const response = Object.assign({}, product, { sizes: sizeArray });

      return plainToInstance(Product, response);
   }

   async update(productId: string, data: UpdateProductDto): Promise<Product> {
      const id: number = parseInt(productId);

      const product = await this.prisma.product.update({
         where: { id },
         data: {
            ...data,
            sizes: {
               create: data.sizes?.map((size) => ({ size })) || [],
            },
         },
         include: {
            sizes: true,
         },
      });

      const sizeArray = product.sizes.map((size) => size.size);

      const response = Object.assign({}, product, { sizes: sizeArray });

      return plainToInstance(Product, response);
   }

   async delete(productId: string): Promise<void> {
      const id: number = parseInt(productId);

      await this.prisma.product.delete({
         where: { id },
      });
   }
}
