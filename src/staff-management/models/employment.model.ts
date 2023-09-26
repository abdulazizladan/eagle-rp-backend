import { ApiProperty } from "@nestjs/swagger";

export class Employment {
    
    @ApiProperty({name: "organization"})
    organization: string;    

    @ApiProperty({name: "startDate"})
    startDate: number;

    @ApiProperty({name: "endDate", nullable: true})
    endDate: number;

    @ApiProperty({name: "position"})
    position: string;
}