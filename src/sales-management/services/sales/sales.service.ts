import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { CreateSaleDTO } from 'src/sales-management/DTOs/createSale.dto';
import { SaleEntity } from 'src/sales-management/entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {

    constructor(
        @InjectRepository(SaleEntity) private salesRepository: Repository<SaleEntity>
    ) {

    }

    getAll(): Observable<SaleEntity[]> {
        return from(this.salesRepository.find({relations: ["items"]})).pipe(

        )
    }

    getByID(id: string) {

    }

    add(sale: CreateSaleDTO) {

    }

    update( id: string ) {

    }

    delete( id: string ) {

    }
}
