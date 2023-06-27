import mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  nic: String,
  name: String,
  address: String,
  salary: Number,
});
