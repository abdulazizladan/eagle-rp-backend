import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { SaleEntity } from "./sale.entity";

@Entity({name: "saleItem"})
export class SaleItemEntity {

    @PrimaryColumn({name: "id"})
    id: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "unitPrice"})
    unitPrice: number;

    @Column({name: "quantity"})
    quantity: number;

    @ManyToOne(type => SaleEntity, sale => sale.items)
    sale: SaleEntity;
}