
import { ActionReducerMap , MetaReducer, createSelector } from '@ngrx/store';
import * as fromProducts from "./products.reducer";
export interface State {
    products: fromProducts.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer
}

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Products selectors
 * 
 */

 export const selectProductsState = (state: State) => state.products;

 export const selectAllProducts = createSelector(
    selectProductsState,
    fromProducts.selectAll
 )

 export const selectActiveProduct = createSelector(
    selectProductsState,
    fromProducts.selectActiveProduct
 )
