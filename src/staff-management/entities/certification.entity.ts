import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StaffEntity } from "./staff.entity";

@Entity({name: "Certification"})
export class CertificationEntity {
    
    @PrimaryColumn()
    id: number;

    @Column({name: "title"})
    title: string;

    @Column({name: "body"})
    body: string;

    @Column({name: "dateIssued"})
    dateIssued: Date;

    @Column({name: "validUntil"})
    validUntil: Date;

    @ManyToOne(type => StaffEntity, staff => staff.certifications)
    staff: StaffEntity
}