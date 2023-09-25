import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Gender } from "../enums/gender.enum";
import { StaffEntity } from "./staff.entity";

@Entity({name: "biodata"})
export class BiodataEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    dateOfBirth: Date;

    @Column({})
    gender: string;

    @OneToOne(() => StaffEntity, (staff) => staff.biodata)
    @JoinColumn()
    staff: StaffEntity;
}