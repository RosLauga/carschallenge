import { createReducer, on } from "@ngrx/store";
import { getCarDetailSucceded } from "./car-detail.actions";
import { CarDetailState } from "./car-detail.states";
import { CarDetailModel } from "../../../../domain/cars/models/car-detail.model";


export const initialState: CarDetailState = {
  car: {} as CarDetailModel,
};

export const carDetailReducer = createReducer(
  initialState,
  on(getCarDetailSucceded, (state, {car}) => {
    return {
      ...state,
      car: {...car}
    };
  }),    
);
