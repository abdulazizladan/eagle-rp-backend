import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { MilestoneEntity } from "./milestone.entity";

@Entity({name: "Project"})
export class ProjectEntity {
    @PrimaryColumn({generated: true, unique: true})
    id: number;

    @Column({})
    title: string;

    @Column({})
    description: string;

    @OneToMany(type => MilestoneEntity, milestone => milestone.project)
    milestones: MilestoneEntity;
}