import { Component } from "@angular/core";
import { CarDetailComponent } from "../../core/layout/car-detail/car-detail.component";


@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    imports:[CarDetailComponent]
})
export class DetailComponent {}