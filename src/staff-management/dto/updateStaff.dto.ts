import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateStaffDTO {
    @ApiProperty({name: "id", description: "staff ID number"})
    @IsNotEmpty()
    id: string;

    @ApiProperty({name: "firstName"})
    firstName: string;

    @ApiProperty({name: "middleName"})
    middleName: string;

    @ApiProperty({name: "lastName"})
    lastName: string;
}