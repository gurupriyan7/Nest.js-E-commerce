import { Ref, modelOptions, prop } from '@typegoose/typegoose';
import { SizesModel } from '../sizes/sizes.model';

@modelOptions({ schemaOptions: { timestamps: true, collection: 'products' } })
export class ProductsModel {
  @prop({ required: true })
  title: string;

  @prop()
  discription: string;

  @prop({ required: true })
  price: number;

  @prop({ type: [String], required: true })
  images: string[];

  @prop({ type: [String], required: true })
  videos: string[];

  @prop({ ref: () => SizesModel })
  sizes: Ref<SizesModel>;
}
