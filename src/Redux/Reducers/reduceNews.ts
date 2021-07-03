import { type } from "os"
import { number } from "prop-types"

let Change_Page_Pollution:"reduceNews/Change_Page_Pollution"="reduceNews/Change_Page_Pollution"
let Change_Page_Coordinate:"reduceNews/Change_Page_Coordinate"="reduceNews/Change_Page_Coordinate"
let Change_Page_Weather:"reduceNews/Change_Page_Weather"="reduceNews/Change_Page_Weather"

let initialState={
    mainTheme: "News" as string,
    description: "All news and features" as string,
    pageCoordinate:1 as number,
    pagePollution:1 as number,
    pageWeather:1 as number
}

type InitialStateType=typeof initialState
type ActionType=ChangePageType

let reduceNews=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case Change_Page_Pollution:
            return{...state,pagePollution:action.page}    
        case Change_Page_Weather:
            return{...state,pageWeather:action.page}
        case Change_Page_Coordinate:
            return{...state,pageCoordinate:action.page}    
        default:
            return state
    }
}

type ChangePageType={
    type:typeof Change_Page_Pollution | typeof Change_Page_Coordinate | typeof Change_Page_Weather,
    page:number
}

export let changePagePollution=(page:number):ChangePageType=>{
    return{
        type:Change_Page_Pollution,
        page
    }
}
export let changePageCoordinate=(page:number):ChangePageType=>{
    return{
        type:Change_Page_Coordinate,
        page
    }
}
export let changePageWeather=(page:number):ChangePageType=>{
    return{
        type:Change_Page_Weather,
        page
    }
}

export default reduceNews