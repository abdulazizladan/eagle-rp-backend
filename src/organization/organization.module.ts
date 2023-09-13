import { Module } from '@nestjs/common';
import { OrganizationController } from './controllers/organization/organization.controller';
import { OrganizationService } from './services/organization/organization.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationEntity } from './entities/organization.entity';
import { OrganizationContactEntity } from './entities/contact.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        OrganizationEntity, 
        OrganizationContactEntity
    ])],
    controllers: [OrganizationController],
    providers: [OrganizationService]
})
export class organizationModule {}
