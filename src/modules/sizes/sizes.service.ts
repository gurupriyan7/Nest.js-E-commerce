import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { SizesModel } from './sizes.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateSizeDto } from './sizes.dto';
import { Types } from 'mongoose';

@Injectable()
export class SizesService {
  constructor(
    @InjectModel(SizesModel.name)
    private readonly sizesModel: ReturnModelType<typeof SizesModel>,
  ) {}

  async createSize(
    createSizeDto: CreateSizeDto,
  ): Promise<SizesModel & { _id: Types.ObjectId }> {
    return await this.sizesModel.create(createSizeDto);
  }

  async updateSize(
    sizeId: string,
    updateSizeDto: Partial<CreateSizeDto>,
  ): Promise<SizesModel | null> {
    return await this.sizesModel.findByIdAndUpdate(sizeId, updateSizeDto);
  }
}
