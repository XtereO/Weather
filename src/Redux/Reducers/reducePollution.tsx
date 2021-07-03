import { number, string } from "prop-types"
import {NewItem} from "../../Types/type"
import {AppStateType} from "../Redux"
import {getPollution} from "../../API/api"
import {ThunkAction} from "redux-thunk"

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType> 

let Set_Pollution:"reducePollution/Set_Pollution"="reducePollution/Set_Pollution"
type InfoPollutionType={
    aqi:number|null,//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
    components:{
    co:null|number,
    no:null|number,
    no2:null|number,
    o3:null|number,
    so2:null|number,
    pm2_5:null|number,
    pm10:null|number,
    nh3:null|number
    }
}

let initialState={
    mainTheme: "Pollution" as string,
    description: "Check place on pollution" as string,
    news: [
        {description:"e mae save planet",img:"https://c.wallhere.com/photos/56/29/tree_glade_sun_light_shadow_grass-674839.jpg!d"}
        
    ] as Array<NewItem>,
    aqi:null as number|null,//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
    components:{
    co:null as null|number,
    no:null as null|number,
    no2:null as null|number,
    o3:null as null|number,
    so2:null as null|number,
    pm2_5:null as null|number,
    pm10:null as null|number,
    nh3:null as null|number
    },
    filter:{
        lat:null as number|null,
        lon:null as number|null
    }
}

type InitialStateType=typeof initialState
type ActionType=SetPollutionType

let reducePollution=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case Set_Pollution:
            return{...state,aqi:action.payload.aqi,
            components:{...action.payload.components},
            filter:{lat:action.lat,lon:action.lon}
            }
        default:
            return state
    }
}

type SetPollutionType={
    type:typeof Set_Pollution
    payload:InfoPollutionType
    lat:number
    lon:number
}
let setPollution=(payload:InfoPollutionType,lat:number,lon:number):SetPollutionType=>{
    return{
        type:Set_Pollution,
        payload,lat,lon
    }
}
export let setPollutionThunk=(lat:number,lon:number):ThunkType=>async (dispatch:any)=>{
    let response=(await getPollution(lat,lon)).list[0]
    
    let payload:InfoPollutionType={
        aqi:response.main.aqi,
        components:{
            co:response.components.co,
            no:response.components.no,
            no2:response.components.no2,
            o3:response.components.o3,
            so2:response.components.so2,
            pm2_5:response.components.pm2_5,
            pm10:response.components.pm10,
            nh3:response.components.nh3
        }
    }
    dispatch(setPollution(payload,lat,lon))
}


export default reducePollution