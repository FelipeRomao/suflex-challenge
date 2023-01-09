import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Produtcs')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('findByAlphabeticalOrder')
  findByAlphabeticalOrder() {
    return this.productService.findByAlphabeticalOrder();
  }

  @Get('findByExpiredToday')
  findByExpiredToday() {
    return this.productService.findByProductsExpiredToday();
  }

  @Get('findExpireTomorrow')
  findExpireTomorrow() {
    return this.productService.findExpireTomorrow();
  }
}
