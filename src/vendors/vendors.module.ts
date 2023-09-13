import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorEntity } from './entities/vendor.entity';
import { ProductEntity } from './entities/product.entity';
import { ServiceEntity } from './entities/service.entity';
import { VendorContactEntity } from './entities/vendorContact.entity';

@Module({
  controllers: [VendorsController],
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
