import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty()
    "id": string;

    @ApiProperty()
    "email": string;

    @ApiProperty()
    "firstName": string;

    @ApiProperty()
    "middleName": string;

    @ApiProperty()
    "lastName": string;

    @ApiProperty()
    "password": string;
}