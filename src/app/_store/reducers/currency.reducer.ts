import { createReducer, Action, on } from '@ngrx/store';
import { CurrencyActions } from '../actions/currency.actions';

const _currencyReducer = createReducer<string, Action>(
    'INR',
    on(CurrencyActions.updateCurrency, (state, {code}) => code)
);

export const currencyReducer = (state: string, action: Action) => {
    return _currencyReducer(state, action);
}