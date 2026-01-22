import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { CarCardComponent } from "../car-card/car-card.component";
import { AsyncPipe } from "@angular/common";
import { FilterNavBarComponent } from "../filter-nav-bar/filter-nav-bar.component";
import { Store } from "@ngrx/store";
import { filteredCarsList } from "../../../domain/cars/states/cars.selectors";



@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    imports: [CarCardComponent, AsyncPipe, FilterNavBarComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainComponent {
    private readonly store = inject(Store)

    public cars = this.store.select(filteredCarsList)
}