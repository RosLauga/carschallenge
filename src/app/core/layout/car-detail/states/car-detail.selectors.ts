import { createSelector } from "@ngrx/store";
import { AppState } from "../../../store/app.states";

export const carsSelector = (state: AppState) => state.car;

export const carDetail = createSelector(carsSelector, (state) => state.car);

export const isLoadingcarDetail = createSelector(carsSelector, (state) => state.isLoading);




