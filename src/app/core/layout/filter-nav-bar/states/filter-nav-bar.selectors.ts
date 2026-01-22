import { createSelector } from "@ngrx/store";
import { AppState } from "../../../store/app.states";

export const filterSelector = (state: AppState) => state.filter;

export const filterActive = createSelector(
  filterSelector,
  (state) => state.filter,
);

export const orderByActive = createSelector(
  filterSelector,
  (state) => state.orderBy,
);

