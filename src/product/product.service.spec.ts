import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '../configs/prisma-service';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, PrismaService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call findByAlphabeticalOrder method only one time', async () => {
    const findByAlphabeticalOrderSpy = jest.spyOn(
      ProductService.prototype,
      'findByAlphabeticalOrder',
    );

    await service.findByAlphabeticalOrder();
    expect(findByAlphabeticalOrderSpy).toBeCalledTimes(1);
  });

  it('should compare the first object in the list and they must be equal', async () => {
    const obj = {
      id: '686a3cb8-2bda-40ec-a6d8-d0950ebd02ba',
      name: 'abóbora',
      dias_para_vencimento: '1',
    };

    const products = await service.findByAlphabeticalOrder();
    expect(products[0]).toStrictEqual(obj);
  });

  it('should be call findByProductsExpiredToday method only one time', async () => {
    const findByProductsExpiredTodaySpy = jest.spyOn(
      ProductService.prototype,
      'findByProductsExpiredToday',
    );

    await service.findByProductsExpiredToday();
    expect(findByProductsExpiredTodaySpy).toBeCalledTimes(1);
  });

  it('should return a list with the value 0 for the days_to_expiration attribute', async () => {
    const products = await service.findByProductsExpiredToday();
    products.map((product) => expect(product.dias_para_vencimento).toBe('0'));
  });

  it('should be call findExpireTomorrow method only one time', async () => {
    const findExpireTomorrowSpy = jest.spyOn(
      ProductService.prototype,
      'findExpireTomorrow',
    );

    await service.findExpireTomorrow();
    expect(findExpireTomorrowSpy).toBeCalledTimes(1);
  });

  it('should return a list with the value 1 for the days_to_expiration attribute', async () => {
    const products = await service.findExpireTomorrow();
    products.map((product) => expect(product.dias_para_vencimento).toBe('1'));
  });
});
