import thunkMiddleWare from "redux-thunk"
import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from "redux-devtools-extension"
import {rootReducer} from "./reducer/rootReducer"
import sagaWatcher from "./saga"

const sagaMiddleWare = createSagaMiddleware()

const middleWare = [sagaMiddleWare]

const middleWareEnhancer = applyMiddleware(...middleWare)

const enhancer = [middleWareEnhancer]

const store = createStore(
  rootReducer,
  composeWithDevTools(...enhancer)
)

sagaMiddleWare.run(sagaWatcher)

export default store