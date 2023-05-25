import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBalanceByUser(userId: string) {
    console.log('getBalanceByUser')
    return 13;
  }
}
