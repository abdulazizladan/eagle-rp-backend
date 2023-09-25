import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StaffEntity } from "./staff.entity";

@Entity({name: "Employment"})
export class EmploymentEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    organization: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    position: string;

    @ManyToOne(type => StaffEntity, staff => staff.employment)
    staff: StaffEntity;
}