import { AsyncPipe } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from "@angular/core";
import { SlideCardComponent } from "./slide-card/slide-card.component";
import { CarDetailModel } from "../../../domain/cars/models/car-detail.model";

@Component({
    selector: "app-slide",
    templateUrl: "./slide.component.html",
    styleUrl: "./slide.component.css",
    imports: [SlideCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SlideComponent {
    public slideCarDetail = input<CarDetailModel>()
}