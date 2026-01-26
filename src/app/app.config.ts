import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideStore } from "@ngrx/store";
import { routes } from "./pages/routes/routes.component";
import { provideHttpClient } from "@angular/common/http";
import { provideEffects } from "@ngrx/effects";
import { ROOT_REDUCER_MAP } from "./core/store/app.states";
import { CarsEffects } from "./domain/cars/states/cars/cars.effects";
import { FilterNavBarEffects } from "./core/layout/filter-nav-bar/states/filter-nav-bar.effects";
import { CarDetailEffects } from "./core/layout/car-detail/states/car-detail.effects";
import { GlobalsEffects } from "./domain/cars/states/globals/globals.effects";
import { register } from "swiper/element/bundle";
import { MenuListEffects } from "./core/layout/menu/states/menu.effects";

register();
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(ROOT_REDUCER_MAP),
    provideHttpClient(),
    provideEffects(
      CarsEffects,
      FilterNavBarEffects,
      CarDetailEffects,
      GlobalsEffects,
      MenuListEffects,
    ),
  ],
};
