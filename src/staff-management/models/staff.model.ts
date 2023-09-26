import { ApiProperty } from "@nestjs/swagger";
import { Biodata } from "./biodata.model";
import { Education } from "./education.model";
import { Employment } from "./employment.model";

export class Staff {
    @ApiProperty()
    id: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    middleName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty({name: "biodata"})
    biodata: Biodata;

    @ApiProperty({name: "education", isArray: true})
    education: Education;

    @ApiProperty({name: "employment", isArray: true})
    employment: Employment;
}