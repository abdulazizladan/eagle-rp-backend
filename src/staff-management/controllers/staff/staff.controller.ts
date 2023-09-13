import { Body, Controller, Delete, Get, Param, Post, Put, Logger } from '@nestjs/common';
import { ApiConflictResponse, ApiNotFoundResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { StaffService } from "../../services/staff/staff.service";
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CreateStaffDTO } from '../../dto/createStaff.dto';

@ApiTags("Staff")
@Controller('staff')
export class StaffController {

    private readonly logger = new Logger(StaffController.name);

    constructor( private staffService: StaffService ) {

    }

    @ApiOperation({
        summary: "Get all staff"
    })
    @Get("")
    getAll() {
        this.logger.log("Handling findAll() request ...");
        return this.staffService.getAll()
    }

    @ApiNotFoundResponse({
        description: "",
        status: 404
    })
    @ApiOperation({
        summary: "Get single staff by ID"
    })
    @Get("/:id")
    getByID( @Param("id") id: string ) {
        return this.staffService.getByID(id)
    }

    @ApiConflictResponse({
        
    })
    @ApiOperation({
        description: "Add a new staff",
        summary: "Add a new staff"
    })
    @Post("")
    create(@Body() createStaffDTO: CreateStaffDTO) {
        return this.staffService.create(createStaffDTO);
    }

    update() {
        return this.staffService.update()
    }

    @ApiOperation({
        summary: "Delete single staff"
    })
    @Delete()
    remove( @Param("id") id: string ) {
        try{
            this.staffService.remove(id)
        }catch( error ){
            throw new ExceptionsHandler
        }
    }

}
