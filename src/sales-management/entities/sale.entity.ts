import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { SaleItemEntity } from "./item.entity";

@Entity({name: "Sales"})
export class SaleEntity {

    @PrimaryColumn({
        name: "id",
        unique: true
    })
    id: string;

    @Column({
        name: "date",
        default: Date.now(),
    })
    date: Date;

    @OneToMany(type => SaleItemEntity, item => item.sale)
    items: SaleItemEntity;
}