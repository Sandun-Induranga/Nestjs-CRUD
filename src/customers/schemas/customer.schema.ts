import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  nic: String,
  name: String,
  address: String,
  salary: Number,
});
