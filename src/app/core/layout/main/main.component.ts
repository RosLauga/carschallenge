import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { CarCardComponent } from "../car-card/car-card.component";
import { AsyncPipe } from "@angular/common";
import { FilterNavBarComponent } from "../filter-nav-bar/filter-nav-bar.component";
import { Store } from "@ngrx/store";
import { filteredCarsList } from "../../../domain/cars/states/cars/cars.selectors";
import {MatTabsModule} from '@angular/material/tabs';
import { setTabIndexSelector } from "../../../domain/cars/states/globals/globals.selectors";
import { CarDetailComponent } from "../car-detail/car-detail.component";
@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    imports: [CarCardComponent, AsyncPipe, FilterNavBarComponent, CarDetailComponent, MatTabsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainComponent {
    private readonly store = inject(Store)

    public cars$ = this.store.select(filteredCarsList)
    public tabIndex$ = this.store.select(setTabIndexSelector)
}