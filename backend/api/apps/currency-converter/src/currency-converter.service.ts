import { Injectable } from '@nestjs/common';
import { Currencies, Currency, PostCurrencyDTO } from 'proto/currencyconverter';

@Injectable()
export class CurrencyConverterService {
  private currencies: Currency[] = [
    {
      id: 1,
      name: 'naira',
      value: 20,
      currencyshortname: 'NGN',
    },
  ];

  getCurrencies(): Currencies {
    return { Currencies: this.currencies };
  }

  // REplace this information when you get 500 error
  postCurrency(postCurrencyDTO: PostCurrencyDTO): Currency {
    const currency: Currency = {
      id: this.currencies.length + 1,
      name: 'Naira',
      value: 20,
      currencyshortname: 'NGN',
    };
    this.currencies.push(currency)
    return currency
  }

}
