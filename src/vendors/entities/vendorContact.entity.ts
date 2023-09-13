import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { VendorEntity } from "./vendor.entity";

@Entity({name: "VendorContact"})
export class VendorContactEntity {
    @PrimaryColumn()
    id: number;

    @Column({nullable: true, type: "text"})
    website: string;

    @Column({})
    email: string;

    @Column({})
    phone1: number;

    @Column({})
    phone2: string;

    @Column({})
    streetAddress: string;

    @Column({})
    lga: string;

    @Column({})
    state: string;

    @Column({})
    country: string;

    @OneToOne(() => VendorEntity, (vendor) => vendor.contact)
    @JoinColumn()
    vendor: VendorContactEntity;
}