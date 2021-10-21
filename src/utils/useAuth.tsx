import * as React from "react";
// import { IState, Action } from '../views/Login/reducer';

// interface StateType {
//     authed: boolean;
// }
// const defaultState = {
//     authed: false,
// };

// interface IContextProps {
//     state: IState;
//     dispatch: Action
// }

// const AuthContext = () => React.createContext({} as IContextProps);

// export function useAuth() {
//     const [authed, setAuthed] = React.useState(false);

//     return {
//         authed,
//         login() {
//             return new Promise((resolve) => {
//                 setAuthed(true);
//                 resolve(true);
//             });
//         },
//         logout() {
//             return new Promise((resolve) => {
//                 setAuthed(false);
//                 resolve(false);
//             });
//         }
//     };
// }

export const isAuthenticated = () => {
    return false;
}