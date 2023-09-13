import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @ApiProperty({default: ""})
    id: string;
    
    @IsNotEmpty({message: "Email cannot be empty."})
    @IsEmail()
    @ApiProperty({default: ""})
    email: string;

    @ApiProperty({default: ""})
    firstName: string;

    @ApiProperty({default: ""})
    middleName: string;

    @ApiProperty({default: ""})
    lastName: string;

    @ApiProperty({default: ""})
    password: string

}