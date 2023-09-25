import { ApiProperty } from "@nestjs/swagger";

export class CreateSaleItemDTO {
    
    @ApiProperty({name: "name"})
    name: string;

    @ApiProperty({name: "unitPrice"})
    unitPrice: number;

    @ApiProperty({name: "quantity"})
    quantity: string;
}