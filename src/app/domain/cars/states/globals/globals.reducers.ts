import { createReducer, on } from "@ngrx/store";
import { GlobalsStates } from "./globals.states";
import { setTabIndexAction } from "./globals.actions";

export const initialState: GlobalsStates = {
  tabIndex: 0
};
export const globalsReducer = createReducer(
  initialState,
  on(setTabIndexAction, (state, {index}) => {
     return {
      ...state,
      tabIndex: index
    };
  }),       
);
