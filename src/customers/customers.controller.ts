import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './interfaces/customer';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.getAllCustomer();
  }
}
