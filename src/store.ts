import { createBrowserHistory } from 'history';

import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import { createRootReducer } from './store/reducers/root-reducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export const history = createBrowserHistory();
function configProdStore(initialState?: any): any {
    const middlewares = [
        routerMiddleware(history)
    ];

    return createStore(
        createRootReducer(history),
        initialState,
        compose(applyMiddleware(...middlewares))
    )
}

function configDevStore(preloadedState?: any): any {
    const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares: any[] = [
        reduxImmutableStateInvariant(),
        routerMiddleware(history),
    ];

    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancer(
            applyMiddleware(...middlewares)
        ),
    )

    return store;
}

const store = process.env.NODE_ENV === 'production' ? configProdStore() : configDevStore();
// store.dispatch(action here);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;