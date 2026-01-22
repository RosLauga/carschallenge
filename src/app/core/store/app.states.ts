import { ActionReducerMap } from "@ngrx/store";
import { filterListReducer } from "../layout/filter-nav-bar/states/filter-nav-bar.reducers";
import { FilterNavBarStates } from "../layout/filter-nav-bar/states/filter-nav-bar.states";
import { carsListReducer } from "../../domain/cars/states/cars.reducers";
import { CarsStates } from "../../domain/cars/states/cars.states";

export interface AppState {
  filter: FilterNavBarStates,
  cars: CarsStates
}

export const ROOT_REDUCER_MAP: ActionReducerMap<AppState> = {
  filter: filterListReducer,
  cars: carsListReducer
};