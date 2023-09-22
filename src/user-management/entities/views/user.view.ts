import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity()
export class UserView {

    @ViewColumn()
    id: string;

}