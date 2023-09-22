import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Vendors")
@Controller('products')
export class ProductsController {

    @Get("/vendors/:id")
    getAll() {

    }
}