import { createSelector } from "@ngrx/store";
import { AppState } from "../../../core/store/app.states";

export const carsSelector = (state: AppState) => state.cars;

export const carsList = createSelector(carsSelector, (state) => state.cars);

export const filteredCarsList = createSelector(carsSelector, (state) => state.filtered);



