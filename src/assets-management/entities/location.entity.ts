import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { SiteEntity } from "./site.entity";

@Entity({name: "Location"})
export class LocationEntity {
    
    @PrimaryColumn({unique: true})
    id: string;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @OneToOne(() => SiteEntity, site => site.location)
    @JoinColumn()
    site: SiteEntity;
}