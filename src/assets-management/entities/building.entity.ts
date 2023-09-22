import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { SiteEntity } from "./site.entity";

@Entity({name: "Building"})
export class BuildingEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    code: string

    @ManyToMany(type => SiteEntity, site => site.buildings)
    site: SiteEntity;

}