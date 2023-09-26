import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { MembershipEntity } from "./membership.entity";
import { BiodataEntity } from "./biodata.entity";
import { EmploymentEntity } from "./employment.entity";
import { EducationEntity } from "./education.entity";
import { TrainingEntity } from "./training.entity";
import { CertificationEntity } from "./certification.entity";

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

    @OneToMany(type => EmploymentEntity, employment => employment.staff)
    employment: EmploymentEntity;

    @OneToMany(type => EducationEntity, education => education.staff)
    education: EducationEntity;

    @OneToMany(type => TrainingEntity, training => training.staff)
    training: TrainingEntity

    @OneToMany(type => CertificationEntity, certification => certification.staff)
    certifications: CertificationEntity


}