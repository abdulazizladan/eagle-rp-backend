import { ApiProperty } from "@nestjs/swagger";
import { Code, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { OrganizationContactEntity } from "./contact.entity";

@Entity()
export class OrganizationEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    image: string;

    @OneToOne(() => OrganizationContactEntity, contact => contact.organization)
    contact: OrganizationContactEntity
}