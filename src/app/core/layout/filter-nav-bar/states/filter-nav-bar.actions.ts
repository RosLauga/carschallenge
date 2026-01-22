import { createAction, props } from "@ngrx/store";
import { FilterValues } from "../../../../shared/components/filter-nav-button/filter-nav-button.component";

// Search bye title
export const filterList = createAction(
  "[Filter List] Filter List",
  props<{ value: FilterValues }>(),
);

export const filterListSucceded = createAction(
  "[Filter List] Filter List Succeded",
)



