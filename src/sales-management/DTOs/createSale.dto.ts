import { ApiProperty } from "@nestjs/swagger";
import { CreateSaleItemDTO } from "./createSaleItem.dto";

export class CreateSaleDTO {
    @ApiProperty({
        name: "date",
        nullable: false
    })
    date: Date;

    @ApiProperty({name: "items", isArray: true})
    items: CreateSaleItemDTO;

}