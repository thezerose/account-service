import { Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @MessagePattern('get_user_balance')
  getUserBalance(data: any) {
    console.log('get_user_balance', data);
    return this.accountService.getBalanceByUser(+data.value.id);
  }

  @MessagePattern('update_user_balance')
  updateBalance(data: any) {
    console.log('update_user_balance', data);
    return this.accountService.updateBalanceByUser(+data.value.id, data.value.balance);
  }

}
