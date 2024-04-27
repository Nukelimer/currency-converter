import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyConverterController } from './currency-converter.controller';
import { CurrencyConverterService } from './currency-converter.service';

describe('CurrencyConverterController', () => {
  let currencyConverterController: CurrencyConverterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyConverterController],
      providers: [CurrencyConverterService],
    }).compile();

    currencyConverterController = app.get<CurrencyConverterController>(CurrencyConverterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(currencyConverterController.getHello()).toBe('Hello World!');
    });
  });
});
