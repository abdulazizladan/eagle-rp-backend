import { Body, Controller, Delete, Get, Param, Post, Put, Logger, Patch } from '@nestjs/common';
import { ApiConflictResponse, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { StaffService } from "../../services/staff/staff.service";
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { CreateStaffDTO } from '../../dto/createStaff.dto';
import { UpdateStaffDTO } from 'src/staff-management/dto/updateStaff.dto';
import { StaffEntity } from 'src/staff-management/entities/staff.entity';
import { Staff } from 'src/staff-management/models/staff.model';

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
    @ApiFoundResponse({
        type: Staff,
        isArray: true
    })
    getAll() {
        this.logger.log("Handling findAll() request ...");
        return this.staffService.getAll()
    }

    
    @ApiOperation({
        summary: "Get single staff by ID"
    })
    @Get("/:id")
    @ApiNotFoundResponse({
        description: "User not found",
        status: 404,
        type: "string"
    })
    @ApiFoundResponse({
        description: "User found",
        status: 200,
        type: Staff
    })
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

    @Patch(":id")
    update(@Param("id") id: string, @Body() staff: UpdateStaffDTO) {
        console.log("Updateing")//return this.staffService.update()
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
