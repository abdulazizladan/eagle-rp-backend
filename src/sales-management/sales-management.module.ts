import { Module } from '@nestjs/common';
import { SalesController } from './controllers/sales/sales.controller';
import { SalesService } from './services/sales/sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleEntity } from './entities/sale.entity';
import { SaleItemEntity } from './entities/item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SaleEntity,
      SaleItemEntity
    ])
  ],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesManagementModule {}
