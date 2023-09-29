import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { ProjectEntity } from 'src/project-management/entities/project.entity';
import { Project } from 'src/project-management/models/project.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

    constructor(@InjectRepository(ProjectEntity) private projectRepository: Repository<ProjectEntity>) {

    }

    getAll(): Observable<ProjectEntity[]> {
        return from(this.projectRepository.find({relations: ["milestones"]}))
    }

    getByID(id: string) {

    }

    add() {

    }

    update() {

    }

    delete() {

    }
}
