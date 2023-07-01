import { modelOptions, prop } from '@typegoose/typegoose';
import { ProductSize } from 'src/constants/enums';

@modelOptions({ schemaOptions: { timeStamps: true, collection: 'products' } })
export class ProductsModel {
  @prop({required:true})
  title: string;

  @prop()
  discription:string

  @prop({required:true})
  price:string;

  @prop({ type: [String], required: true })
  images: string[];

  @prop({ type: [String], required: true })
  videos: string[];
  
  @prop({type:[String],enum:ProductSize})
  sizes:ProductSize[]
}
