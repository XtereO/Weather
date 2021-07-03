import {NewItem} from "../../Types/type"
import {getCoordinate,getCityName} from "../../API/api"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../Redux"
import { act } from "react-dom/test-utils"

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>

let Find_Coordinate_City_By_Name:"reduceCoordinate/Find_Coordinate_City_By_Name"="reduceCoordinate/Find_Coordinate_City_By_Name" 
let Find_City_By_Coordinate:"reduceCoordinate/Find_City_By_Coordinate"="reduceCoordinate/Find_City_By_Coordinate"

let initialState={
    mainTheme:"Coordinate" as string,
    description:"Find out " as string,
    news:[
        {img:"https://i.artfile.ru/1920x1200_580824_[www.ArtFile.ru].jpg",description:"e mae 3 materik!"},
        
    ]as Array<NewItem>,
    lat:null as number|null,
    lon:null as number|null,
    city:null as string|null,
    filter:{
        lat:null as number|null,
        lon:null as number|null,
        city:null as string|null
    }
}

type InitialStateType=typeof initialState
type ActionType=FindCoordinateCityByNameType | FindCityByCoordinateType

let reduceCoordinate=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case Find_Coordinate_City_By_Name:
            return{...state,lat:action.lat,lon:action.lon,
                filter:{...state.filter,city:action.cityName}}
        case Find_City_By_Coordinate:
            return{...state,city:action.cityName,
                filter:{...state.filter,lat:action.lat,lon:action.lon}}
        default:
            return state
    }
}

type FindCoordinateCityByNameType={
    type:typeof Find_Coordinate_City_By_Name
    lat:number
    lon:number
    cityName:string    
}
let findCoordinateCityByName=(lat:number,lon:number,cityName:string):FindCoordinateCityByNameType=>{
    return{
        type:Find_Coordinate_City_By_Name,
        lat,lon,cityName
    }
}
export let findCoordinateCityByNameThunk=(cityName:string):ThunkType=>async (dispatch:any)=>{
    let {lat,lon}=(await getCoordinate(cityName)).coord

    dispatch(findCoordinateCityByName(lat,lon,cityName))
}

type FindCityByCoordinateType={
    type:typeof Find_City_By_Coordinate
    cityName:string
    lat:number
    lon:number
}
let findCityByCoordinate=(cityName:string,lat:number,lon:number):FindCityByCoordinateType=>{
    return{
        type:Find_City_By_Coordinate,
        cityName,lat,lon
    }
}
export let findCityByCoordinateThunk=(lat:number,lon:number)=>async (dispatch:any)=>{
    let cityName=(await getCityName(lat,lon)).name
    
    dispatch(findCityByCoordinate(cityName,lat,lon))
}


export default reduceCoordinate

