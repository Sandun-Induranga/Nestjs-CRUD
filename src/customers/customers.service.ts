import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async saveCustomer(customer: Customer): Promise<Customer> {
    const newCustomer = new this.customerModel(customer);
    return await newCustomer.save();
  }

  async getAllCustomer(): Promise<Customer[]> {
    return await this.customerModel.find();
  }
}
