import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Vendors')
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @ApiOperation({
    summary: "Add new vendor",
    description: "Add new vendor"
  })
  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(createVendorDto);
  }

  @ApiOperation({
    summary: "Get all vendors",
    description: "Get all vendors"
  })
  @Get()
  findAll() {
    return this.vendorsService.getAll();
  }

  @ApiOperation({
    summary: "Find vendor by ID",
    description: "Find vendor by ID"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @ApiOperation({
    summary: "Update vendor information",
    description: "Updaate vendor information"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(+id, updateVendorDto);
  }

  @ApiOperation({
    summary: "Delete vendor by id",
    description: "Delete vendor by ID"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(+id);
  }
}
