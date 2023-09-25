import { ApiProperty } from "@nestjs/swagger";

export class Staff {
    @ApiProperty()
    id: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    middleName: string;

    @ApiProperty()
    lastName: string;
}