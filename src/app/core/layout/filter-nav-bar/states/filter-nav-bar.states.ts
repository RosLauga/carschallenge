import { FilterValues, OrderValues } from "../../../../shared/components/filter-nav-button/filter-nav-button.component";

export interface FilterNavBarStates {
  filter: FilterValues;
  orderBy: OrderValues;
  isLoading: boolean;  
}
