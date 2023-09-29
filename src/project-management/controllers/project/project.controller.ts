import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Project } from 'src/project-management/models/project.model';
import { ProjectService } from 'src/project-management/services/project/project.service';

@Controller('project')
@ApiTags("Projects")
export class ProjectController {

    constructor( private projectService: ProjectService) {

    }

    @ApiOkResponse({type: Project, isArray: true})
    @Get()
    getAll() {
        return this.projectService.getAll()
    }
}
