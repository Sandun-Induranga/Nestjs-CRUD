import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  async saveCustomer(): Promise<string> {
    return 'Save Customer Invoked';
  }
}
