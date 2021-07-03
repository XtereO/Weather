import { any } from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../../Redux/Redux";
import getNews from "../../../Redux/Selectors/getNews"
import {setPollutionThunk} from "../../../Redux/Reducers/reducePollution"
import withHeader from "../../../HOC/withHeader"
import Pollution from "./Pollution"

export type HimItem={
    name:string | null
    k:number | null //koeficent
}
type MSTPType={
    mainTheme:string
    description:string
    news:any//object with jsx
    aqi:number|null//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
    components:Array<HimItem>
    filter:{
        lat:number | null
        lon:number | null
    }
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
    mainTheme:state.pollution.mainTheme,
    description:state.pollution.description,
    news:getNews(state.pollution.news),
    aqi:state.pollution.aqi,//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
    components:[
        {name:"co",k:state.pollution.components.co},
        {name:"no",k:state.pollution.components.no},
        {name:"no2",k:state.pollution.components.no2},
        {name:"o3",k:state.pollution.components.o3},
        {name:"so2",k:state.pollution.components.so2},
        {name:"pm2_5",k:state.pollution.components.pm2_5},
        {name:"pm10",k:state.pollution.components.pm10},
        {name:"nh3",k:state.pollution.components.nh3}
    ]as Array<HimItem>,
    filter:{
        lat:state.pollution.filter.lat,
        lon:state.pollution.filter.lon
    }
    }
}
type MDTPType={
    setPollutionThunk:(lat:number,lon:number)=>void
}
type OwnPropsType={}

export default compose(
  connect<MSTPType,MDTPType,OwnPropsType,AppStateType>
  (MapStateToProps,{setPollutionThunk}),
  withHeader  
)(Pollution)