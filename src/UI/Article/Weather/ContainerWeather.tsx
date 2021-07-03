import { connect } from "react-redux";
import { compose } from "redux";
import Weather from "./Weather";
import { AppStateType } from "../../../Redux/Redux";
import getNews from "../../../Redux/Selectors/getNews";
import withHeader from "../../../HOC/withHeader";
import {setWeatherThunk} from "../../../Redux/Reducers/reduceWeather"
import { DayItem } from "../../../Types/type";

type MSTPType={
    description:string,
    mainTheme:string,
    news:Array<any>//Array with jsx
    allWeather:Array<DayItem>
    term:string
}
type MDTPType={
    setWeatherThunk:(city?:string)=>void
}
type OwnPropsType={}
let mapStateToProps=(state:AppStateType):MSTPType=>{
    return{
    description:state.weather.description,
    mainTheme:state.weather.mainTheme,
    news:getNews(state.weather.news),
    allWeather:state.weather.allWeather,
    term:state.weather.term
    }
}


export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>
    (mapStateToProps,{setWeatherThunk}),
    withHeader)(Weather)
