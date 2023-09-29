import { ApiProperty } from "@nestjs/swagger";
import { Deliverable } from "./deliverable.model";
import { Milestone } from "./milestone.model";

export class Project {

    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    contractorID: string;

    @ApiProperty({type: Deliverable, isArray: true})
    deliverables: Deliverable[];

    @ApiProperty({type: Milestone, isArray: true})
    milestones: Milestone[];
}