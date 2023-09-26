import { ApiProperty } from "@nestjs/swagger";

export class Education {
    @ApiProperty({name: "institution"})
    institution: string;

    @ApiProperty({name: "startYear"})
    startYear: number;

    @ApiProperty({name: "endYear", nullable: true})
    endYear: number;

    @ApiProperty({name: "certification"})
    certification: string;
}