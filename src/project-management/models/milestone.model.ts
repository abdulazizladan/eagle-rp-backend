import { ApiProperty } from "@nestjs/swagger";

export class Milestone {

    @ApiProperty()
    title: string;
    
    @ApiProperty()
    description: string;

    @ApiProperty()
    dateCommenced: Date;

    @ApiProperty()
    dateCompleted: Date;

    @ApiProperty()
    remark: string;
}