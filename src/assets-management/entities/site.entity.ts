import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { BuildingEntity } from "./building.entity";
import { LocationEntity } from "./location.entity";
import { AssetsEntity } from "./assets.entity";

@Entity({name: "Site"})
export class SiteEntity {

    @PrimaryColumn({})
    @JoinColumn()
    id: string;

    @Column({})
    name: string;

    @Column({})
    code: string;

    @Column({})
    streetAddress: string;

    @Column({})
    lga: string;

    @Column({})
    state: string;

    @Column({})
    country: string;

    @OneToMany(type => SiteEntity, site => site.buildings)
    buildings: BuildingEntity;

    @OneToOne(() => LocationEntity, location => location.site)
    location: LocationEntity

    @ManyToOne(type => AssetsEntity, assets => assets.sites)
    assets: AssetsEntity
}