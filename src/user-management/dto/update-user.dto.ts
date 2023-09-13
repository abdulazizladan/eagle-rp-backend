import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    @ApiProperty()
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
    password: string
}