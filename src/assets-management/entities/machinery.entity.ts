import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MachineryEntity{

    @PrimaryColumn()
    id: string;

}