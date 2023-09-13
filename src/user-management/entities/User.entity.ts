import { Column, Entity, PrimaryColumn } from "typeorm";
import { Status } from "../enums/status.enum";

@Entity({ name: "User" })
export class UserEntity {
   
    @PrimaryColumn({nullable: false, unique: true, name: "id", primary: true})
    id?: string;

    @Column({unique: true, type: "text"})
    email: string;

    @Column({nullable: false, type: "text"})
    firstName: string;
    
    @Column({ type: "text"})
    middleName: string;

    @Column({nullable: false, type: "text"})
    lastName: string;

    @Column({name: "status", nullable: true, default: Status.actice})
    status: Status;

    @Column({nullable: false, type: "text", comment: "", name: "password", })
    password: string;
}