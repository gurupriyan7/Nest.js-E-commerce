import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { ProductSize } from 'src/constants/enums';

export class Sizes {
  @IsNotEmpty()
  @IsEnum(ProductSize)
  size: ProductSize;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}

export class CreateSizeDto {
  @IsArray()
  @Type(() => Sizes)
  sizes: Sizes[];
}
