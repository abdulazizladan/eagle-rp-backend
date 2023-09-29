import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserRespository } from './repositories/user.repository';
import { UserEntity } from './entities/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService, 
    UserRespository,
    UserEntity
  ]
})
export class UserManagementModule {}
