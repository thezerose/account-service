import { Injectable } from "@nestjs/common";
import { AccountRepository } from "./account.repository";

@Injectable()
export class AccountService {
    constructor(
        private accountRepository: AccountRepository,
      ) {}

  async getBalanceByUser(userId: number) {
    console.log("getBalanceByUser");
    const account = await this.accountRepository.findUserById(userId);
    return account.balance? account.balance : undefined;
  }

  async updateBalanceByUser(userId: number, balance: number) {
    console.log("updateBalanceByUser");
    const account = await this.accountRepository.updateUserById(userId, balance);
    return {status: 'success'}
  }
}
