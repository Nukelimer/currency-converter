import { Controller, Get } from '@nestjs/common';
import { CurrencyConverterService } from './currency-converter.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  Currencies,
  Currency,
  CurrencyConverterServiceController,

  PostCurrencyDTO,
} from 'proto/currencyconverter';


@Controller()
export class CurrencyConverterController
  implements CurrencyConverterServiceController
{
  constructor(
    private readonly currencyConverterService: CurrencyConverterService,
  ) { }
  
  @GrpcMethod('CurrencyConverterService', 'GetCurrency')
  getCurrencies(): Currencies{
  return this.currencyConverterService.getCurrencies()
  }

  @GrpcMethod('CurrencyConverterService', 'PostCurrency')
  postCurrency(postCurrencyDTO: PostCurrencyDTO): Currency {
    return this.currencyConverterService.postCurrency(postCurrencyDTO)
  }
}
