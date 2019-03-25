import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduxMulti from 'redux-multi'
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk, reduxMulti];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;