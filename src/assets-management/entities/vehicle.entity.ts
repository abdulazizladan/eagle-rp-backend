import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AssetsEntity } from "./assets.entity";

@Entity({name: "Vehicle"})
export class VehicleEntity {
    @PrimaryColumn()
    id: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    yearOfManufacture: number;

    @Column()
    chasisNumber: string;

    @Column()
    licenseNumber: string;

    @Column()
    color: string;

    @ManyToOne(type => AssetsEntity, asset => asset.vehicles)
    asset: AssetsEntity;

    @Column()
    dateOfPurchase: Date;

    @Column({default: Date.now()})
    dateAdded: Date;
}