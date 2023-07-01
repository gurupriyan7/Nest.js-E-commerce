import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';
import responseUtils from 'src/utils/response-utils';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(
    @Res() res: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    try {
      const data = await this.productService.createProduct(createProductDto);
      return responseUtils.success(res, { data, status: HttpStatus.CREATED });
    } catch (error) {
      return responseUtils.error({ res, error });
    }
  }
}
