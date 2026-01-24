import { createReducer, on } from "@ngrx/store";

import { CarsStates } from "./cars.states";
import { getCarsListSucceded } from "./cars.actions";
import { filterList, orderByList } from "../../../../core/layout/filter-nav-bar/states/filter-nav-bar.actions";
import { CarModel } from "../../models/cars.model";

export const initialState: CarsStates = {
  cars: [],
  filtered: [],
  isLoading: false,
};
console.log('cars reducer initialized');
export const carsListReducer = createReducer(
  initialState,
  on(getCarsListSucceded, (state, {cars}) => {
    console.log("getcars")
    return {
      ...state,
      cars: cars,
      filtered: cars
    };
  }),
  on(filterList, (state, {value}) => {
    console.log('filterscars');
    const filterCars = [...state.cars].filter((car) => value === "all" ? car : value === car.segment )
    return {
      ...state,
      filtered: filterCars
    };
  }), 
  on(orderByList, (state, {value}) => {
    console.log('order',value);

    const sortMap = {
    "asc": (a: CarModel, b: CarModel) => a.price - b.price,
    "desc": (a: CarModel, b: CarModel) => b.price - a.price,
    "older": (a: CarModel, b: CarModel) => a.year - b.year,
    "newer": (a: CarModel, b: CarModel) => b.year - a.year,
    };
    const orderByCars = value === "clean" ? [...state.cars] :[...state.filtered].sort(sortMap[value])
    return {
      ...state,
      filtered: orderByCars
    };
  }),  
);
