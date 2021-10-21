import { createSelector } from 'reselect';

import { State } from '../../store/reducers/root-reducer';

const getLogin = (state: State) => state.login;
const getInit = createSelector(getLogin, login => login.init);

// USER
const getUser = createSelector(getLogin, login => login.user);
const getIsUserAuthenticated = createSelector(getUser, user => user.authenticated);
const getUserRole = createSelector(getUser, user => user.role);

export const LoginSelectors = {
    getInit,
    getIsUserAuthenticated,
    getUserRole
}