import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
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
