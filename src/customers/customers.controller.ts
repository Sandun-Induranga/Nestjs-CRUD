import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  findAll(): string {
    return 'This action returns all customers';
  }
}
