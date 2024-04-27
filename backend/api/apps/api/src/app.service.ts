import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CURRENCY_CONVERTER_SERVICE_NAME,
  CurrencyConverterServiceClient,
  PostCurrencyDTO,
} from 'proto/currencyconverter';


@Injectable()
export class AppService implements OnModuleInit {
  private currencyConverterServiceClient: CurrencyConverterServiceClient;
  constructor(@Inject('currencyconverter') private clientGrpc: ClientGrpc) {}

  onModuleInit() {
    this.currencyConverterServiceClient = this.clientGrpc.getService(
      CURRENCY_CONVERTER_SERVICE_NAME,
    );
  }

  postCurrency(postCurrencyDTO: PostCurrencyDTO) {
    return this.currencyConverterServiceClient.postCurrency(postCurrencyDTO);
  }

  getCurrencies() {
    return this.currencyConverterServiceClient.getCurrencies({});
  }
}

// this is concerned with rendering  on the screen
