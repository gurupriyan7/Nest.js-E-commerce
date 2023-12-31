import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto, GetAllProductsDto } from './product.dto';
import responseUtils from 'src/utils/response-utils';
import { getPaginationOptions } from 'src/utils/pagination.utils';

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

  @Get()
  async getAllProducts(
    @Res() res: Response,
    @Query() queryParam: GetAllProductsDto,
  ) {
    try {
      const paginationOptions = getPaginationOptions({
        limit: queryParam.limit,
        page: queryParam.page,
      });
      const data = await this.productService.getAllProducts({
        query: {},
        options: {
          ...paginationOptions,
          sort: { updatedAt: -1 },
        },
        populate: {
          path: 'sizes',
        },
      });
      return responseUtils.success(res, { data, status: HttpStatus.OK });
    } catch (error) {
      return responseUtils.error({ res, error });
    }
  }

  @Get(':productId')
  async getProduct(
    @Res() res: Response,
    @Param('productId') productId: string,
  ) {
    try {
      const data = await this.productService.getProduct({
        query: { _id: productId },
        populate: {
          path: 'sizes',
        },
      });
      return responseUtils.success(res, { data, status: HttpStatus.OK });
    } catch (error) {
      return responseUtils.error({ res, error });
    }
  }

  @Patch(':productId')
  async updateProduct(
    @Res() res: Response,
    @Param('productId') productId: string,
    @Body() updateProductDto: Partial<CreateProductDto>,
  ) {
    try {
      const data = await this.productService.updateProduct(
        productId,
        updateProductDto,
      );
      return responseUtils.success(res, { data, status: HttpStatus.OK });
    } catch (error) {
      return responseUtils.error({ res, error });
    }
  }

  @Delete(':productId')
  async deleteProduct(
    @Res() res: Response,
    @Param('productId') productId: string,
  ) {
    try {
      const data = await this.productService.deleteProduct(productId);
      return responseUtils.success(res, { data, status: HttpStatus.OK });
    } catch (error) {
      return responseUtils.error({ res, error });
    }
  }
}
