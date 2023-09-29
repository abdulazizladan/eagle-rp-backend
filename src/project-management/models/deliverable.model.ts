import { ApiProperty } from "@nestjs/swagger";

export class Deliverable {

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    delivered: boolean;
}