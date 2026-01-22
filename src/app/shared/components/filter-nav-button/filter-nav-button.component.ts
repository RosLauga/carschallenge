import { Component, inject, input } from "@angular/core";
import { Store } from "@ngrx/store";
import { filterList } from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.actions";

export interface FilterNavButtonModel {
    title: string;
    value: FilterValues; 
}

export type FilterValues = "all" | "cars" | "pickups" | "suvs"


@Component({
selector: "app-filter-nav-button",
templateUrl: "./filter-nav-button.component.html",
host: {
    class: 'h-full'
  },
})
export class FilterNavButtonComponent {
    public title = input<string>("")
    public value = input<FilterValues>("all")
    private store = inject(Store)
    
    getFilter(value: FilterValues) {
        this.store.dispatch(filterList({value}))
    }

}