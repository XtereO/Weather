import { weatherType,forecastWeekType,PollutionType  } from "../Types/type";
import axios from "axios";

let instance=axios.create({
    baseURL:"http://api.openweathermap.org/data/2.5/" as string
})
let myKey="ef155a3a841668736116d3334f0f6ee1"

export let getWeather=(city:string)=>{
    return instance.get<forecastWeekType>(`forecast?q=${city}&cnt=${14}&appid=${myKey}`)
    .then(response=>response.data)
}
export let getCoordinate=(cityName:string)=>{
    return instance.get<weatherType>(`weather?q=${cityName}&appid=${myKey}`)
    .then(response=>response.data)
}
export let getCityName=(lat:number,lon:number)=>{
    return instance.get<weatherType>(`weather?lat=${lat}&lon=${lon}&appid=${myKey}`)
    .then(response=>response.data)
}
export let getPollution=(lat:number,lon:number)=>{
    return instance.get<PollutionType>(`air_pollution?lat=${lat}&lon=${lon}&appid=${myKey}`)
    .then(response=>response.data)
}