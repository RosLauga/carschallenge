import { ActionReducerMap } from "@ngrx/store";
import { filterListReducer } from "../layout/filter-nav-bar/states/filter-nav-bar.reducers";
import { FilterNavBarStates } from "../layout/filter-nav-bar/states/filter-nav-bar.states";
import { carsListReducer } from "../../domain/cars/states/cars/cars.reducers";
import { CarsStates } from "../../domain/cars/states/cars/cars.states";
import { carDetailReducer } from "../layout/car-detail/states/car-detail.reducers";
import { CarDetailState } from "../layout/car-detail/states/car-detail.states";
import { GlobalsStates } from "../../domain/cars/states/globals/globals.states";
import { globalsReducer } from "../../domain/cars/states/globals/globals.reducers";
import { MenuListStates } from "../layout/menu/states/menu.states";
import { menuListReducer } from "../layout/menu/states/menu.reducers";

export interface AppState {
  filter: FilterNavBarStates,
  cars: CarsStates,
  car: CarDetailState,
  globals: GlobalsStates,
  menuList: MenuListStates
}

export const ROOT_REDUCER_MAP: ActionReducerMap<AppState> = {
  filter: filterListReducer,
  cars: carsListReducer,
  car: carDetailReducer,
  globals: globalsReducer,
  menuList: menuListReducer
};