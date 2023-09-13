import { Injectable } from '@nestjs/common';
import { OrganizationEntity } from 'src/organization/entities/organization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class OrganizationService {
    constructor( 
        @InjectRepository(OrganizationEntity) private readonly organizationRepository: Repository<OrganizationEntity>) {

    }

    get(): Observable<OrganizationEntity> {
        return from(this.organizationRepository.findOne({where: {id: "1"}, relations: ["contact"]}))
    }
}
