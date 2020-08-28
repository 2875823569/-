import {news} from "./reducer/news"
import {tv} from "./reducer/tv"
import {article} from "./reducer/article"
import {classfication} from "./reducer/classfication"

import { createStore,applyMiddleware,combineReducers} from "redux";
import thunk from 'redux-thunk';

let store = createStore(combineReducers({classfication,news,tv,article}),applyMiddleware(thunk))

export default store