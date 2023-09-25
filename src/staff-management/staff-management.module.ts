import { Module } from '@nestjs/common';
import { StaffService } from './services/staff/staff.service';
import { DocumentService } from './services/document/document.service';
import { StaffController } from './controllers/staff/staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEntity } from './entities/staff.entity';
import { MembershipEntity } from './entities/membership.entity';
import { EmploymentEntity } from './entities/employment.entity';

@Module({
  providers: [
    StaffService, 
    DocumentService
  ],
  controllers: [StaffController],
  imports: [
    TypeOrmModule.forFeature(
      [
        StaffEntity, 
        EmploymentEntity,
        MembershipEntity
      ]
    )
  ]
})
export class StaffManagementModule {}
