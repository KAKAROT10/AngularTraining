import { createAction, props } from '@ngrx/store';

enum ActionTypes {
    UPDATE_CURRENCY = '[Currency] Update currency' 
};

const updateCurrency = createAction(
    ActionTypes.UPDATE_CURRENCY,
    props<{code: string}>()
);

export const CurrencyActions = { updateCurrency, ActionTypes };
