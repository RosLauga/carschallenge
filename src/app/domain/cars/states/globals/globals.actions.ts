import { createAction, props } from "@ngrx/store";

export const setTabIndexAction = createAction(
  "[ Tab ] Tab index",
  props<{index: number}>()
)


