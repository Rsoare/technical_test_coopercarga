import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repository/product.repository';

@Injectable()
export class ProductsService {
   constructor(private productRepository: ProductRepository) {}

   create(data: CreateProductDto) {
      return this.productRepository.create(data);
   }

   findAll() {
      return this.productRepository.findAll();
   }

   async findOne(id: string) {
      const findProduct = await this.productRepository.findOne(id);

      if (!findProduct) {
         throw new NotFoundException('contact not found');
      }

      return findProduct;
   }

   async update(id: string, data: UpdateProductDto) {
      const findProduct = await this.productRepository.findOne(id);

      if (!findProduct) {
         throw new NotFoundException('contact not found');
      }

      return this.productRepository.update(id, data);
   }

   async remove(id: string) {
      const findProduct = await this.productRepository.findOne(id);

      if (!findProduct) {
         throw new NotFoundException('contact not found');
      }

      return this.productRepository.delete(id);
   }
}
