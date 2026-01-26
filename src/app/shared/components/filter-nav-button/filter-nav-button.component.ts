import { Component, inject, input } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  filterList,
  orderByList,
} from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.actions";
import {
  filterActive,
  orderByActive,
} from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.selectors";
import { CommonModule } from "@angular/common";
import { FilterValues, OrderValues } from "./models";

@Component({
  selector: "app-filter-nav-button",
  templateUrl: "./filter-nav-button.component.html",
  host: {
    class: "h-full",
  },
  imports: [CommonModule],
})
export class FilterNavButtonComponent {
  public title = input<string>("");
  public value = input<FilterValues | OrderValues>(
    FilterValues.all ?? OrderValues.clean,
  );
  private store = inject(Store);

  public filterActive = this.store.selectSignal(filterActive);
  public orderActive = this.store.selectSignal(orderByActive);

  getActive() {
    if (
      this.value() === this.filterActive() ||
      this.value() === this.orderActive()
    ) {
      return true;
    }
    return false;
  }

  getFilter(value: FilterValues | OrderValues) {
    if (Object.values(FilterValues).includes(value as FilterValues)) {
      this.store.dispatch(filterList({ value: value as FilterValues }));
    }
    if (Object.values(OrderValues).includes(value as OrderValues)) {
      this.store.dispatch(orderByList({ value: value as OrderValues }));
    }
  }
}
