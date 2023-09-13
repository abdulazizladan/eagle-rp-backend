import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserLoginCredentials {
    
    @ApiProperty(
        {
            default: "",
            required: true,
            description: "user email"
        }
    )
    @IsEmail({})
    email: string;

    @ApiProperty(
        {
            default: "",
            required: true,
            description: "user password"
        }
    )
    password: string;
}