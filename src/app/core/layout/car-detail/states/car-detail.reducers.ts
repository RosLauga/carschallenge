import { createReducer, on } from "@ngrx/store";
import { getCarDetail, getCarDetailSucceded } from "./car-detail.actions";
import { CarDetailState } from "./car-detail.states";
import { CarDetailModel } from "../../../../domain/cars/models/car-detail.model";

export const initialState: CarDetailState = {
  car: {} as CarDetailModel,
  isLoading: false,
};

export const carDetailReducer = createReducer(
  initialState,
  on(getCarDetail, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(getCarDetailSucceded, (state, { car }) => {
    return {
      ...state,
      car: { ...car },
      isLoading: false,
    };
  }),
);
