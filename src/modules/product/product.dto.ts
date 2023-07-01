import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsEnum,
} from 'class-validator';
import { ProductSize } from 'src/constants/enums';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  discription: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsArray()
  @ArrayNotEmpty()
  images: string[];

  @IsArray()
  @ArrayNotEmpty()
  videos: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(ProductSize)
  sizes: ProductSize[];
}
