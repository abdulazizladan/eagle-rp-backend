import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project/project.controller';
import { ProjectService } from './services/project/project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { MilestoneEntity } from './entities/milestone.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      MilestoneEntity
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectManagementModule {}
