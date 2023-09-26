import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StaffEntity } from "./staff.entity";

@Entity({name: "Education"})
export class EducationEntity {

    @PrimaryColumn({})
    id: string;

    @Column({})
    institution: string;

    @Column({})
    startYear: number;

    @Column({})
    endYear: number;

    @Column({})
    certification: string;

    @ManyToOne(type => StaffEntity, staff => staff.education)
    staff: StaffEntity;

}