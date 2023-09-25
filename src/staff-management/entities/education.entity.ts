import { Column, Entity, PrimaryColumn } from "typeorm";

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

}