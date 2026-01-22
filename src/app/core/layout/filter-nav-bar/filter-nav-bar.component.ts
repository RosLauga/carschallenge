import { Component, input, signal } from "@angular/core";
import { FilterNavButtonComponent, FilterNavButtonModel } from "../../../shared/components/filter-nav-button/filter-nav-button.component";

@Component({
selector: "app-filter-nav-bar",
templateUrl: "./filter-nav-bar.component.html",
imports: [FilterNavButtonComponent]
})
export class FilterNavBarComponent {
   public filterNavButtons = signal<FilterNavButtonModel[]>([
    {
        title: "Todos",
        value: "all"
    },
    {
        title: "Autos",
        value: "cars"
    },
    {
        title: "Pickups y Comerciales",
        value: "pickups"
    },
    {
        title: "SUVs y Crossovers",
        value: "suvs"
    }
   ]) 
}