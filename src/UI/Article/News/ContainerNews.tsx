import { connect } from "react-redux";
import { compose } from "redux";
import withHeader from "../../../HOC/withHeader"
import getNews from "../../../Redux/Selectors/getNews"
import {AppStateType} from "../../../Redux/Redux"
import {changePagePollution,changePageCoordinate,changePageWeather} from "../../../Redux/Reducers/reduceNews"
import News from "./News"

type MSTPType={
    mainTheme:string
    description:string
    coordinateNews:Array<any>
    pollutionNews:Array<any>
    weatherNews:Array<any>
    pagePollution:number
    pageCoordinate:number
    pageWeather:number
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        mainTheme:state.news.mainTheme,
        description:state.news.description,
        coordinateNews:getNews(state.coordinate.news),
        pollutionNews:getNews(state.pollution.news),
        weatherNews:getNews(state.weather.news),
        pagePollution:state.news.pagePollution,
        pageCoordinate:state.news.pageCoordinate,
        pageWeather:state.news.pageWeather
    }
}
type MDTPType={
    changePagePollution:(page:number)=>void
    changePageWeather:(page:number)=>void
    changePageCoordinate:(page:number)=>void
}
type OwnPropsType={}

export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>
    (MapStateToProps,
    {changePagePollution,changePageCoordinate,changePageWeather}),
    withHeader
)(News)