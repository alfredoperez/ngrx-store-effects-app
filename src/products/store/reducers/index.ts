import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

// ARCHITECTURE: this file contains all the reducers from the applicaiton
export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>(
    'products'
);

// Pizza state
// Architecture: the selectors allows to separate the parts of the store state and pass them to
// different components.
export const getPizzaState = createSelector(getProductsState,
    (state: ProductsState) => state.pizzas);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

export const getAllPizzas = createSelector(getPizzasEntities,
    (entities) => {
        return Object.keys(entities)
            .map(id => entities[parseInt(id, 10)])
    })
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);