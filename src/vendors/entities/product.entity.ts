import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn} from "typeorm";
import { VendorEntity } from "./vendor.entity";

@Entity({name: "Product"})
export class ProductEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    unit: string;
    
    @Column()
    unitPrice: string;

    @ManyToOne(type => VendorEntity, vendor => vendor.products)
    vendor: VendorEntity;
}