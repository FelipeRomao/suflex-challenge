import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma-service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  findByAlphabeticalOrder() {
    return `This action returns all product ordered by alphabetical`;
  }

  findByProductsExpiredToday() {
    return `This action returns all product expired today`;
  }

  findExpireTomorrow() {
    return `This action returns all product expire tomorrow`;
  }
}
