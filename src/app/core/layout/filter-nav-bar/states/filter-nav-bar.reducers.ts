import { createReducer, on } from "@ngrx/store";
import {
  filterList,
  orderByList  
} from "./filter-nav-bar.actions";
import { FilterNavBarStates } from "./filter-nav-bar.states";
import { FilterValues, OrderValues } from "../../../../shared/components/filter-nav-button/models";

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
  on(orderByList, (state, {value}) => {
    return {
      ...state,
      orderBy: value
    };
  }), 
);
