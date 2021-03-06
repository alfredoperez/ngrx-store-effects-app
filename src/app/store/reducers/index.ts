import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
    >('routerReducer');