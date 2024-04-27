import { NestFactory } from '@nestjs/core';
import { CurrencyConverterModule } from './currency-converter.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CurrencyConverterModule, {
    transport: Transport.GRPC,
    options: {
      package: 'currencyconverter',
      protoPath: join(__dirname, '../currencyconverter.proto'),
    }
  });
  await app.listen()
  
}
bootstrap();
