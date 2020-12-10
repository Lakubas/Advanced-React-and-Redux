import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise'

export default function root({ children, initialState = {} }): any {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}