import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductsModel } from './product.model';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypegooseModule.forFeature([ProductsModel])],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
