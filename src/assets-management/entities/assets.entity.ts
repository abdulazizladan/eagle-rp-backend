import { Entity, OneToMany, PrimaryColumn } from "typeorm";
import { VehicleEntity } from "./vehicle.entity";
import { SiteEntity } from "./site.entity";

@Entity({name: "assets"})
export class AssetsEntity{

    @PrimaryColumn()
    organization: string;

    @OneToMany(type => VehicleEntity, vehicle => vehicle.asset)
    vehicles: VehicleEntity;

    @OneToMany(type => SiteEntity, site => site.assets)
    sites: SiteEntity
}