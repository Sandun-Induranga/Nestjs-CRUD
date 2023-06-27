import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  saveCustomer(): string {
    return 'Save Customer Invoked';
  }
}
