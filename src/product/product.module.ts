import { Module } from '@nestjs/common';

import { PrismaService } from '../configs/prisma-service';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
