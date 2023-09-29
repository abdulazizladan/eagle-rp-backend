import { FoundationModel } from "./foundation.model";
import { LocationModel } from "./location.model";
import { RoofModel } from "./roof.model";

export class BuildingModel {
    
    id: number;

    name: string;

    code: string;

    foundation: FoundationModel;

    location: LocationModel;

    roof: RoofModel;
}