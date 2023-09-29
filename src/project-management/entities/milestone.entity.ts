import { PrimaryColumn, Column, Entity, ManyToOne } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity({name: "Milestone"})
export class MilestoneEntity {
    
    @PrimaryColumn({generated: true, unique: true})
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(type => ProjectEntity, project => project.milestones)
    project: ProjectEntity;
}