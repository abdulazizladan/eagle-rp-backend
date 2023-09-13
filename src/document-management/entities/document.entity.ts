import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "Document"})
export class DocumentEntity {

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    description: string;

    @Column()
    url: string;
}