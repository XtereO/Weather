import thunkMiddleware from "redux-thunk";
import { createStore,combineReducers,applyMiddleware } from "redux";
import reduceWeather from "./Reducers/reduceWeather";
import reduceCoordinate from "./Reducers/reduceCoordinate"
import reducePollution from "./Reducers/reducePollution"
import reduceMain from "./Reducers/reduceMain"
import reduceNews from "./Reducers/reduceNews"

let rootReducer=combineReducers({
    weather:reduceWeather,
    coordinate:reduceCoordinate,
    pollution:reducePollution,
    main:reduceMain,
    news:reduceNews
})

type RootReducerType=typeof rootReducer
export type AppStateType=ReturnType<RootReducerType>

//@ts-ignore
let store=createStore(rootReducer,applyMiddleware(thunkMiddleware))


export default store