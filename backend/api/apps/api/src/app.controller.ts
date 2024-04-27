import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostCurrencyDTO } from 'proto/currencyconverter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  postCurrency(@Body() postCurrencyDTO: PostCurrencyDTO) {
    
    return this.appService.postCurrency(postCurrencyDTO)
  }
  
    @Get()
    getCurrencies() {
      return this.appService.getCurrencies();
    }
}

// this is the executionAsyncResource.