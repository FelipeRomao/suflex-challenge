import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Produtcs')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({ summary: 'Find products sorted alphabetically' })
  @Get('findByAlphabeticalOrder')
  findByAlphabeticalOrder() {
    return this.productService.findByAlphabeticalOrder();
  }

  @ApiOperation({ summary: 'Find expired products today' })
  @Get('findByExpiredToday')
  findByExpiredToday() {
    return this.productService.findByProductsExpiredToday();
  }

  @ApiOperation({ summary: 'Find products that will expire tomorrow' })
  @Get('findExpireTomorrow')
  findExpireTomorrow() {
    return this.productService.findExpireTomorrow();
  }
}
