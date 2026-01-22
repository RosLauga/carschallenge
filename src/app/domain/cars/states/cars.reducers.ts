import { createReducer, on } from "@ngrx/store";

import { CarsStates } from "./cars.states";
import { getCarsList, getCarsListSucceded } from "./cars.actions";
import { filterList } from "../../../core/layout/filter-nav-bar/states/filter-nav-bar.actions";

export const initialState: CarsStates = {
  cars: [],
  filtered: [],
  isLoading: false,
};

export const carsListReducer = createReducer(
  initialState,
  on(getCarsListSucceded, (state, {cars}) => {
    return {
      ...state,
      cars: cars,
      filtered: cars
    };
  }),
  on(filterList, (state, {value}) => {
    const filterCars = state.cars.filter((car) => value == "cars" ? car.segment == "Sedan" : value == "pickups" ? car.segment == "Pickups y Comerciales" : value == "suvs" ? car.segment == "SUVs" : car )
    return {
      ...state,
      filtered: filterCars
    };
  }),   
);
