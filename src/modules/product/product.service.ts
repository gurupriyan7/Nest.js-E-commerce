import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductsModel } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductsModel.name)
    private readonly productsModel: ReturnModelType<typeof ProductsModel>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<ProductsModel> {
    return await this.productsModel.create(createProductDto);
  }
}
