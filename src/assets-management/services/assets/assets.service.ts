import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { AssetsEntity } from 'src/assets-management/entities/assets.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsService {

    constructor(
        @InjectRepository(AssetsEntity) private assetsEntity: Repository<AssetsEntity>
    ) {

    }

    getAll(): Observable<AssetsEntity[]> {
        const assets = this.assetsEntity.find({relations: ["vehicles", "sites", "sites.location"]});
        return from(assets)
    }
}
