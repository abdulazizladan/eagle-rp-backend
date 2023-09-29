import { ApiProperty } from "@nestjs/swagger";

export class createProjectDTO {

    @ApiProperty({
        name: "id",
        description: "unique ID for the project"
    })
    id: string;
}