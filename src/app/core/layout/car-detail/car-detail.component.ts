import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { carDetail } from "./states/car-detail.selectors";
import { AsyncPipe, CommonModule } from "@angular/common";
import { SlideCardComponent } from "../slide/slide-card/slide-card.component";
import { SlideComponent } from "../slide/slide.component";


@Component({
    selector: "app-car-detail",
    templateUrl: "./car-detail.component.html",
    imports:[CommonModule, AsyncPipe, SlideComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarDetailComponent{
    private readonly store = inject(Store)

    public carDetail = this.store.select(carDetail)
    
}