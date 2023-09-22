import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, of } from 'rxjs';
import { VehicleEntity } from 'src/assets-management/entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {

    constructor( 
        @InjectRepository(VehicleEntity) private vehiclesRepository: Repository<VehicleEntity> 
        ) {

    }

    getAll(): Observable<VehicleEntity[]> {
        const vehicles = this.vehiclesRepository.find();
        return from(vehicles).pipe();
    }
}
