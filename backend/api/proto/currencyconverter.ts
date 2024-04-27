/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "currencyconverter";

export interface Currency {
  id: number;
  name: string;
  value: number;
  currencyshortname: string;
}

export interface Currencies {
  Currencies: Currency[];
}

export interface PostCurrencyDTO {
  name: string;
}

export interface Empty {
}

export const CURRENCYCONVERTER_PACKAGE_NAME = "currencyconverter";

export interface CurrencyConverterServiceClient {
  postCurrency(request: PostCurrencyDTO): Observable<Currency>;

  getCurrencies(request: Empty): Observable<Currencies>;
}

export interface CurrencyConverterServiceController {
  postCurrency(request: PostCurrencyDTO): Promise<Currency> | Observable<Currency> | Currency;

  getCurrencies(request: Empty): Promise<Currencies> | Observable<Currencies> | Currencies;
}

export function CurrencyConverterServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["postCurrency", "getCurrencies"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CurrencyConverterService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CurrencyConverterService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CURRENCY_CONVERTER_SERVICE_NAME = "CurrencyConverterService";
