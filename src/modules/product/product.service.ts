import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ProductsModel } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './product.dto';
import { SizesService } from '../sizes/sizes.service';
import { createSizeData, updateSizeData } from 'src/utils/size.utils';
import { GetProductLogs } from './product.interface';
import { errorMessages } from 'src/constants/messages';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductsModel.name)
    private readonly productsModel: ReturnModelType<typeof ProductsModel>,
    private readonly sizesService: SizesService,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductsModel> {
    const {
      s,
      m,
      l,
      title,
      discription,
      price,
      images,
      videos,
    } = createProductDto;
    const sizeData: { sizes: any } = createSizeData({ s, m, l });
    const size = await this.sizesService.createSize(sizeData);

    const productData = {
      title,
      discription,
      price,
      images,
      videos,
      sizes: size?._id,
    };

    return (await this.productsModel.create(productData)).populate({
      path: 'sizes',
    });
  }

  async getAllProducts({
    query,
    options,
    populate,
  }: GetProductLogs): Promise<ProductsModel[]> {
    return await this.productsModel
      .find(query, {}, options)
      .populate(populate as string)
      .exec();
  }

  async getProduct({
    query,
    options,
    populate,
  }: GetProductLogs): Promise<ProductsModel | null> {
    return await this.productsModel
      .findById(query, {}, options)
      .populate(populate as string)
      .exec();
  }

  async updateProduct(
    productId: string,
    updateProductDto: Partial<CreateProductDto>,
  ): Promise<ProductsModel | null> {
    const { s, m, l } = updateProductDto;

    if (s || m || l) {
      const product = await this.getProduct({
        query: { _id: productId },
        populate: {
          path: 'sizes',
        },
      });

      const sizeData: any = updateSizeData({ s, m, l }, product);

      if (product) {
        await this.sizesService.updateSize(
          product?.sizes?._id.toString(),
          sizeData,
        );
      }
    }

    return await this.productsModel
      .findByIdAndUpdate(productId, updateProductDto)
      .populate({
        path: 'sizes',
      });
  }

  async deleteProduct(productId: string): Promise<ProductsModel | null> {
    const product = await this.productsModel.findByIdAndRemove(productId);
    if (!product) {
      throw new Error(errorMessages.noProduct);
    }

    await this.sizesService.deleteSize(product?.sizes.toString());

    return product;
  }
}
