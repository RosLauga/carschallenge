import {
  FilterValues,
  OrderValues,
} from "../../../../shared/components/filter-nav-button/models";

export interface FilterNavBarStates {
  filter: FilterValues;
  orderBy: OrderValues;
  isLoading: boolean;
}
