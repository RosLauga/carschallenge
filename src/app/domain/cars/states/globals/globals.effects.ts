import { Actions } from "@ngrx/effects";
import { inject, Injectable } from "@angular/core";
import { HttpAxiosServices } from "../../../../core/services/http.services";

@Injectable()
export class GlobalsEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);  
  
}