import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrganizationService } from '../../services/organization/organization.service';

@ApiTags("Organization")
@Controller('organization')
export class OrganizationController {

    constructor( private readonly organizationService: OrganizationService) {

    }

    @ApiOperation({
        description: "Get organization information"
    })
    @Get()
    getInfo() {
        return this.organizationService.get()
    }
}
