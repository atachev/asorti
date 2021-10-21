import { INIT, LOGIN, LOGOUT } from "./action-types";

export const Actions = {
    init: () => ({ type: INIT }),
    login: () => ({ type: LOGIN }),
    logout: () => ({ type: LOGOUT }),
}