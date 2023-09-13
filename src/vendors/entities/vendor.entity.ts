import { IsEmail } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { ServiceEntity } from "./service.entity";
import { ProductEntity } from "./product.entity";
import { VendorContactEntity } from "./vendorContact.entity";
import { type } from "os";

@Entity({name: "Vendor"})
export class VendorEntity  {
    @PrimaryColumn({nullable: false})
    id: string;

    @Column({nullable: false})
    name: string;

    @IsEmail({})
    @Column({nullable: true})
    email: string;

    @OneToMany(type => ServiceEntity, service => service.vendor)
    services: ServiceEntity[];

    @OneToMany(type => ProductEntity, product => product.vendor)
    products: ProductEntity[];

    @OneToOne(() => VendorContactEntity, (contact) => contact.vendor)
    contact: VendorContactEntity;

    @Column({default: Date.now})
    dateAdded: Date;
}
