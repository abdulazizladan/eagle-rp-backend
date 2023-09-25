import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserManagementModule } from './user-management/user-management.module';
import { StaffManagementModule } from './staff-management/staff-management.module';
import { VendorsModule } from './vendors/vendors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { organizationModule } from './organization/organization.module';
import { DocumentManagementModule } from './document-management/document-management.module';
import { EventsModule } from './events/events.module';
import { AssetsManagementModule } from './assets-management/assets-management.module';
import { SalesManagementModule } from './sales-management/sales-management.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'eagleDB',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    AuthModule, 
    UserManagementModule, 
    StaffManagementModule, 
    VendorsModule, organizationModule, DocumentManagementModule, EventsModule, AssetsManagementModule, SalesManagementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
