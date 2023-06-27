import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [],
  controllers: [AppController, CustomersController],
  providers: [AppService],
})
export class AppModule {}
