import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SalesService } from '../../../sales-management/services/sales/sales.service';
import { CreateSaleDTO } from '../../../sales-management/DTOs/createSale.dto';

@ApiTags("Sales")
@Controller('sales')
export class SalesController {

    constructor( private salesService: SalesService) {

    }

    @Get("")
    @ApiOperation({
        summary: "Get all sales records"
    })
    getAll() {
        return this.salesService.getAll()
    }

    @Get("/:id")
    @ApiOperation({
        summary: "Get a single sales record"
    })
    getByID( @Param("id") id: string ) {

    }

    @Post("")
    @ApiOperation({
        summary: "Add a new sales record"
    })
    add( @Body() sale: CreateSaleDTO) {

    }

    @Patch("/:id")
    @ApiOperation({
        summary: "Update a ales record"
    })
    update( @Param("id") id: string ) {

    }

    @Delete("/:id")
    @ApiOperation({
        summary: "Delete a sales record"
    })
    delete( @Param("id") id: string ) {

    }
}
