import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user_balance')
  getUser(data: any) {
    console.log('get_user_balance', data);
    return this.appService.getBalanceByUser(data.value);
  }
}
