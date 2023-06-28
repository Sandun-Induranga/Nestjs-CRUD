import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.saveCustomer(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.getAllCustomer();
  }

  @Put(':id')
  async update(
    @Body() createCustomerDto: CreateCustomerDto,
    @Param('id') id,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, createCustomerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Customer> {
    return this.customersService.deleteCustomer(id);
  }
}
