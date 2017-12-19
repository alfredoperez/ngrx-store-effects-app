import { PizzasEffects } from './pizzas.effects';

// Architecture : mantain array of effects here in order to keep the 
// imports in the module lean
export const effects: any[] = [PizzasEffects];

export * from './pizzas.effects';