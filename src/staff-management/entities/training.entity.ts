import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StaffEntity } from "./staff.entity";

@Entity({name: "Training"})
export class TrainingEntity {

    @PrimaryColumn({name: "id", })
    id: number;

    @Column({name: "title"})
    title: string;

    @Column({name: "description"})
    description: string;

    @Column({name: "facilitator"})
    facilitator: string;

    @Column({name: "venue"})
    venue: string;

    @Column({name: "dateStarted"})
    dateStarted: Date;

    @Column({name: "duration"})
    duration: number;

    @Column({name: "certification"})
    certification: boolean;

    @Column({name: "dta"})
    dta: number;

    @Column({name: "outstandingDta"})
    outstandingDta: number;

    @ManyToOne(type => StaffEntity, staff => staff.training)
    staff: StaffEntity
}