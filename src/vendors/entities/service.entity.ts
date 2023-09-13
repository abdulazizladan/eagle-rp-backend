import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { VendorEntity } from "./vendor.entity";

@Entity({name: "Service"})
export class ServiceEntity{

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne( type => VendorEntity, vendor => vendor.services)
    vendor: VendorEntity;
}