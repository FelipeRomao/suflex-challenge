import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma-service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findByAlphabeticalOrder() {
    return await this.prisma
      .$queryRaw`SELECT * FROM products ORDER BY [name] COLLATE NOCASE ASC`;
  }

  async findByProductsExpiredToday() {
    return await this.prisma.product.findMany({
      where: {
        dias_para_vencimento: {
          equals: '0',
        },
      },
    });
  }

  async findExpireTomorrow() {
    return await this.prisma.product.findMany({
      where: {
        dias_para_vencimento: {
          equals: '1',
        },
      },
    });
  }
}
