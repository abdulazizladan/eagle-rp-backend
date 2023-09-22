import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets/assets.controller';
import { AssetsService } from './services/assets/assets.service';
import { SitesService } from './services/sites/sites.service';
import { BuildingsService } from './services/buildings/buildings.service';
import { MachineryService } from './services/machinery/machinery.service';
import { EquipmentService } from './services/equipment/equipment.service';
import { FurnitureService } from './services/furniture/furniture.service';
import { AppliancesService } from './services/appliances/appliances.service';
import { VehiclesService } from './services/vehicles/vehicles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetsEntity } from './entities/assets.entity';
import { BuildingEntity } from './entities/building.entity';
import { SiteEntity } from './entities/site.entity';
import { VehicleEntity } from './entities/vehicle.entity';
import { VehiclesController } from './controllers/vehicles/vehicles.controller';
import { MachineryEntity } from './entities/machinery.entity';
import { LocationEntity } from './entities/location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssetsEntity,
      BuildingEntity,
      SiteEntity,
      VehicleEntity,
      MachineryEntity,
      LocationEntity
    ])
  ],
  controllers: [AssetsController, VehiclesController],
  providers: [
    AssetsService, 
    SitesService, 
    BuildingsService, 
    MachineryService, 
    EquipmentService, 
    FurnitureService, 
    AppliancesService, 
    VehiclesService
  ]
})
export class AssetsManagementModule {}
