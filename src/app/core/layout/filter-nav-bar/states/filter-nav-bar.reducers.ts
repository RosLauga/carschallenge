import { createReducer, on } from "@ngrx/store";
import {
  filterList
} from "./filter-nav-bar.actions";
import { FilterNavBarStates } from "./filter-nav-bar.states";

export const initialState: FilterNavBarStates = {
  filter: "all",
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
);
