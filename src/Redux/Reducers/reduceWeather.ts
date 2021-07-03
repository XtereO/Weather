import { getWeather } from "../../API/api";
import { NewItem, DayItem } from "../../Types/type";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../Redux";

let SET_WEATHER: "reduceWeather/SET_Weather" = "reduceWeather/SET_Weather"
let SET_TERM: "reduceWeather/SET_Term" = "reduceWeather/SET_Term"

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

let startValue = {
    "dt": 0,
    "main": {
        "temp": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "sea_level": 0,
        "grnd_level": 0,
        "humidity": 0,
        "temp_kf": 0
    },
    "weather": [
        {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
        }
    ],
    "clouds": {
        "all": 0
    },
    "wind": {
        "speed": 0,
        "deg": 0
    },
    "sys": {
        "pod": ""
    },
    "dt_txt": ""
}
let initialState = {
    mainTheme: "Weather" as string,
    description: "Forecast on near days" as string,
    news: [
        {description:"O my god! Sun sooner is die!!!" ,
        img:"https://artfiles.alphacoders.com/305/thumb-1920-30564.jpg"},
        {description:"Its joke)" ,
        img:"https://artfiles.alphacoders.com/305/thumb-1920-30564.jpg"}] as Array<NewItem>,
    allWeather: [startValue] as Array<DayItem>,
    term: "" as string
}

type InitialStateType = typeof initialState
type ActionType = SetWeatherType | SetTermType

let reduceWeather = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_WEATHER:
            return { ...state, allWeather: [...action.allWeather] }
        case SET_TERM:
            return { ...state, term: action.term }
        default:
            return state
    }
}

type SetTermType = {
    term: string
    type: typeof SET_TERM
}
let setTerm = (term: string): SetTermType => {
    return {
        type: SET_TERM,
        term
    }
}
type SetWeatherType = {
    type: typeof SET_WEATHER
    allWeather: Array<DayItem>
}
let setWeather = (allWeather: Array<DayItem>): SetWeatherType => {
    return {
        type: SET_WEATHER,
        allWeather
    }
}
export let setWeatherThunk = (city: string = "London"): ThunkType => async (dispatch: any) => {
    let response = await getWeather(city)

    dispatch(setWeather(response.list))
    dispatch(setTerm(city))
}


export default reduceWeather