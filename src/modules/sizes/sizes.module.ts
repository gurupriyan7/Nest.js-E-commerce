import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { SizesModel } from './sizes.model';
import { SizesService } from './sizes.service';

@Module({
  imports: [TypegooseModule.forFeature([SizesModel])],
  controllers: [],
  providers: [SizesService],
})
export class SizesModule {}
