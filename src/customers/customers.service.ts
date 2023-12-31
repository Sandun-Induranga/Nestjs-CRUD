import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';

/**
 * @author :  Sandun Induranga
 * @description : Customer Service
 * @since : 2021/02/06
 */

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

  async updateCustomer(id: string, customer: Customer): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(id, customer, {
      new: true,
    });
  }

  async deleteCustomer(id: string): Promise<Customer> {
    return await this.customerModel.findByIdAndRemove(id);
  }
}
