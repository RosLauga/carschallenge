import { Component, inject, input } from "@angular/core";
import { Store } from "@ngrx/store";
import { filterList, orderList } from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.actions";
import { filterActive, orderByActive } from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.selectors";
import { CommonModule } from "@angular/common";

export interface FilterNavButtonModel {
    title: string;
    value: FilterValues; 
}

export interface OrderNavButtonModel {
    title: string;
    value: OrderValues; 
}

export enum FilterValues {
 all = "all",
 car = "cars",
 pickups = "pickups",
 suvs = "suvs"
}

export enum OrderValues {
 clean = "clean",
 desc = "desc",
 asc = "asc",
 newer = "newer",
 older = "older" 
}



@Component({
selector: "app-filter-nav-button",
templateUrl: "./filter-nav-button.component.html",
host: {
    class: 'h-full'
  },
imports: [CommonModule]
})
export class FilterNavButtonComponent {
    public title = input<string>("")
    public value = input<FilterValues | OrderValues>(FilterValues.all ?? OrderValues.clean)
    private store = inject(Store)
    
    public filterActive = this.store.selectSignal(filterActive)
    public orderActive = this.store.selectSignal(orderByActive)

    getActive(){
        if(this.value() === this.filterActive() || this.value() === this.orderActive() ){
            return true
        }
        return false
    }
    
    getFilter(value: FilterValues | OrderValues) {
        if(Object.values(FilterValues).includes(value as FilterValues)){
            this.store.dispatch(filterList({value: value as FilterValues}))            
        }
        if(Object.values(OrderValues).includes(value as OrderValues)){
            this.store.dispatch(orderList({value: value as OrderValues}))            
        }
    }

}