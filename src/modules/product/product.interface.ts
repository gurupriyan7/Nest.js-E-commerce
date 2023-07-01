import { ProductSize } from 'src/constants/enums';
import { ProductsModel } from './product.model';
import { FilterQuery, PopulateOptions, QueryOptions } from 'mongoose';

export interface ProductSizes {
  size: ProductSize;
  quantity: number;
}

export interface GetProductLogs {
  query: FilterQuery<ProductsModel>;
  populate?: PopulateOptions | string;
  options?: QueryOptions;
}

