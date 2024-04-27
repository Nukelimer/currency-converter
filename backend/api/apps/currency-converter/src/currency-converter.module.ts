import { Module } from '@nestjs/common';
import { CurrencyConverterController } from './currency-converter.controller';
import { CurrencyConverterService } from './currency-converter.service';

@Module({
  imports: [],
  controllers: [CurrencyConverterController],
  providers: [CurrencyConverterService],
})
export class CurrencyConverterModule {}
