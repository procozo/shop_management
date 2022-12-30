
import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Actions } from './actions/lDigital.store.action';
import { AppState, LDIGITALStore } from './interfaces/store';
import { LDIGITALReducer } from './reducers/LdigitalReducer';


export const rootReducer = {};

export interface ActionWithPayload<T> extends Action {
    payload: T;
}


// export const reducers: ActionReducer<AppState> = {
//     store: LDIGITALReducer
// };