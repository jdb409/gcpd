import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import photo from './photo';
import photoData from './photoData';
import user from './user';



const reducer = combineReducers({ photo, photoData, user });

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))

const store = createStore(reducer, middleware);

export default store;
