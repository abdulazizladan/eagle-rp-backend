import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AssetsService } from 'src/assets-management/services/assets/assets.service';

@ApiTags("Assets")
@Controller('assets')
export class AssetsController {

    constructor(private assetsService: AssetsService) {

    }

    @ApiOperation({
        description: "Get overall stats on organization's assets",
        summary: "Get overall stats on organization's assets"
    })
    @Get()
    getStats() {
        return this.assetsService.getAll()
    }
}
