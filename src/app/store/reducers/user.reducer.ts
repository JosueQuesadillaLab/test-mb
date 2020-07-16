import { createReducer, on } from '@ngrx/store';
import { setUser , unSetUser } from '../actions';

import { User } from '../../models/user';

export interface UserState {
    user: User; 
}

export const initialUserState: UserState = {
   user:  null
}

const _userReducer = createReducer(initialUserState,

    on(setUser, (state , { user }) => ({ ...state, user: {...user} })),
    on(unSetUser, state  => ({ ...state, user: null })),

);

export function userReducer(state, action) {
    return _userReducer(state, action);
}