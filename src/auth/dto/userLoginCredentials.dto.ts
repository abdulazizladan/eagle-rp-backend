import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserLoginCredentials {
    
    @ApiProperty(
        {
            default: "",
            required: true,
            description: "user email",
            example: "xxx@xxx.com",
            format: "********",
            type: "string",
            name: "email",

        }
    )
    @IsEmail({})
    email: string;

    @ApiProperty(
        {
            default: "",
            required: true,
            description: "user password",
            example: "********",
            type: "string",
            format: "********"
        }
    )
    password: string;
}