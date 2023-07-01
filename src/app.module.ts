import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { appConfig } from './config/app.config';
import { ProductsModel } from './modules/product/product.model';
import { ProductsModule } from './modules/product/product.module';

@Module({
  imports: [
    TypegooseModule.forRoot(appConfig.connectionUrl),
    TypegooseModule.forFeature([ProductsModel]),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
