import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { MembershipEntity } from "./membership.entity";
import { BiodataEntity } from "./biodata.entity";

@Entity({name: "Staff", synchronize: true})
export class StaffEntity {
    @PrimaryColumn({nullable: false})
    id: string;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    middleName: string;

    @Column({nullable: false})
    lastName: string;

    @Column({default: "default.jpg"})
    image: string;

    @OneToOne(() => BiodataEntity, (biodata) => biodata.staff)
    biodata: BiodataEntity;

    @OneToMany(type => MembershipEntity, membership => membership.staff)
    memberships: MembershipEntity[];
}