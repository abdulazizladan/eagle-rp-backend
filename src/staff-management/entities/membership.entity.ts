import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { StaffEntity } from "./staff.entity";

@Entity({name: "Membership"})
export class MembershipEntity {

    @PrimaryColumn()
    id: string;

    @Column({type: "date"})
    dateRegistered: Date;

    @Column({type: "blob"})
    document: string;

    @ManyToOne(type => StaffEntity, staff => staff.memberships)
    staff: StaffEntity;

}