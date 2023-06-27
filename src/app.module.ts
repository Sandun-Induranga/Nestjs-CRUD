import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { keys } from './config/keys';

@Module({
  imports: [CustomersModule, MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
