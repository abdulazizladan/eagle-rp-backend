import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VehiclesService } from 'src/assets-management/services/vehicles/vehicles.service';

@ApiTags("Assets")
@Controller('assets/vehicles')
export class VehiclesController {

    constructor(private vehiclesService: VehiclesService){

    }

    @ApiOperation({
        "description": "Get a list of all vehicles",
        "summary": "Get a list of all vehicles"
    })
    @Get("")
    getAll() {
        return this.vehiclesService.getAll()
    }

    @ApiOperation({description: "Get veicle by ID", summary: "Get vehicle by ID"})
    @Get(':id')
    getByID(@Param("id") id: string){

    }
}
