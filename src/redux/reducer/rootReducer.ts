import {combineReducers} from "redux"
import weatherInfoReducer from "./weather"

const rootReducer = combineReducers({
  weather: weatherInfoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {rootReducer}