import { createAction, props } from "@ngrx/store";
import { FilterValues, OrderValues } from "../../../../shared/components/filter-nav-button/models";

// Search bye title
export const filterList = createAction(
  "[Filter List] Filter List",
  props<{ value: FilterValues }>(),
);

export const orderByList = createAction(
  "[Order List] Order List",
  props<{ value: OrderValues }>(),
);

export const filterListSucceded = createAction(
  "[Filter List] Filter List Succeded",
)

export const orderListSucceded = createAction(
  "[FOrder List] Order List Succeded",
)


