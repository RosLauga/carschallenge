import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { routes } from './pages/routes/routes.component';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ROOT_REDUCER_MAP } from './core/store/app.states';
import { CarsEffects } from './domain/cars/states/cars.effects';
import { FilterNavBarEffects } from './core/layout/filter-nav-bar/states/filter-nav-bar.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(ROOT_REDUCER_MAP),
    provideHttpClient(),
    provideEffects(CarsEffects, FilterNavBarEffects)
]
};
