import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from './repository/product.repository';
import { ProductPrismaRepository } from './repository/prisma/product.prisma.repository';

@Module({
   controllers: [ProductsController],
   providers: [
      PrismaService,
      ProductsService,
      {
         provide: ProductRepository,
         useClass: ProductPrismaRepository,
      },
   ],
})
export class ProductsModule {}
