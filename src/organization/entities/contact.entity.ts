import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { OrganizationEntity } from "./organization.entity";

@Entity()
export class OrganizationContactEntity {
    
    @PrimaryColumn()
    __id: string;

    @Column()
    website: string;

    @Column()
    email: string;

    @OneToOne(() => OrganizationEntity, organization => organization.contact)
    @JoinColumn()
    organization: OrganizationEntity
}