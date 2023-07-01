import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  IsOptional,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsNumber()
  s: number;

  @IsNotEmpty()
  @IsNumber()
  m: number;

  @IsNotEmpty()
  @IsNumber()
  l: number;
}

export class GetAllProductsDto {
  @IsOptional()
  @IsString()
  limit: string;

  @IsOptional()
  @IsString()
  page: string;
}
