import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductsModel } from './product.model';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';
import { SizesService } from '../sizes/sizes.service';
import { SizesModel } from '../sizes/sizes.model';

@Module({
  imports: [TypegooseModule.forFeature([ProductsModel,SizesModel])],
  controllers: [ProductsController],
  providers: [ProductService, SizesService],
})
export class ProductsModule {}
