import { createReducer, on } from "@ngrx/store";
import { MenuListStates } from "./menu.states";
import { getMenuList } from "./menu.actions";

export interface MenuListModel {
  title: string;
  index: number | null;
}

const menuList: MenuListModel[] = [
  { title: "Modelos", index: 0 },
  { title: "Servicios y Accesorios", index: 1 },
  { title: "Financiación", index: 2 },
  { title: "Reviews y Comunidad", index: 3 },
  { title: "break", index: null },
  { title: "Toyoya Mobility Service", index: 4 },
  { title: "Toyota Gazoo Racing", index: 5 },
  { title: "Toyota Hidridos", index: 6 },
  { title: "break", index: null },
  { title: "Concesionarios", index: 7 },
  { title: "Test Drive", index: 8 },
  { title: "Contacto", index: 9 },
  { title: "break", index: null },
  { title: "Actividades", index: 10 },
  { title: "Servicios al Cliente", index: 11 },
  { title: "Ventas Especiales", index: 12 },
  { title: "Innovación", index: 13 },
  { title: "Prensa", index: 14 },
  { title: "Acerca de", index: 15 }
];

export const initialState: MenuListStates = {
menuList: menuList
};


export const menuListReducer = createReducer(
  initialState,
  on(getMenuList, (state) => {
    return {
      ...state,
      menuList: menuList
    };
  }),
);
