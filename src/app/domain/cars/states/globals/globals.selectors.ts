import { createSelector } from "@ngrx/store";
import { AppState } from "../../../../core/store/app.states";

export const GlobalsSelector = (state: AppState) => state.globals;

export const setTabIndexSelector = createSelector(GlobalsSelector, (state) => state.tabIndex);




