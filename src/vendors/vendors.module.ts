import { Module } from '@nestjs/common';
import { VendorsService } from './services/vendors/vendors.service';
import { VendorsController } from './controllers/vendors/vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorEntity } from './entities/vendor.entity';
import { ProductEntity } from './entities/product.entity';
import { ServiceEntity } from './entities/service.entity';
import { VendorContactEntity } from './entities/vendorContact.entity';
import { ProductsController } from './controllers/products/products.controller';
import { ServicesController } from './controllers/services/services.controller';

@Module({
  controllers: [VendorsController, ProductsController, ServicesController],
  providers: [VendorsService],
  imports: [
    TypeOrmModule.forFeature([
      VendorEntity, 
      ProductEntity, 
      ServiceEntity,
      VendorContactEntity
    ]
  )],
})
export class VendorsModule {}
