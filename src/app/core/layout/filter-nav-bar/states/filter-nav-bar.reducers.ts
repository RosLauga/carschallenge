import { createReducer, on } from "@ngrx/store";
import {
  filterList,
  orderList
} from "./filter-nav-bar.actions";
import { FilterNavBarStates } from "./filter-nav-bar.states";
import { FilterValues, OrderValues } from "../../../../shared/components/filter-nav-button/filter-nav-button.component";

export const initialState: FilterNavBarStates = {
  filter: FilterValues.all,
  orderBy: OrderValues.clean,
  isLoading: false,
};

export const filterListReducer = createReducer(
  initialState,
  on(filterList, (state, {value}) => {
    return {
      ...state,
      filter: value
    };
  }),
  on(orderList, (state, {value}) => {
    return {
      ...state,
      orderBy: value
    };
  }), 
);
