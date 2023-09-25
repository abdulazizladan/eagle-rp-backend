import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    @ApiProperty({readOnly: true})
    id: string;

    @IsEmail()
    @ApiProperty()
    email: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    middleName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    password: string
}