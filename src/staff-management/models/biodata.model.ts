import { ApiProperty } from "@nestjs/swagger";

export class Biodata {
    @ApiProperty({name: "gender"})
    gender: string;

    @ApiProperty({name: "date of birth"})
    dateOfBirth: Date;
}