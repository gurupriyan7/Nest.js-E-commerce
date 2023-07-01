import { modelOptions, prop } from '@typegoose/typegoose';
import { ProductSizes } from '../product/product.interface';

@modelOptions({ schemaOptions: { timestamps: true, collection: 'sizes' } })
export class SizesModel {
  @prop()
  sizes: ProductSizes[];
}
