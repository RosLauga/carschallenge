import { createSelector } from "@ngrx/store";
import { AppState } from "../../../store/app.states";

export const menuListSelector = (state: AppState) => state.menuList

export const menuSelector = createSelector(
  menuListSelector,
  (state) => state.menuList,
);


