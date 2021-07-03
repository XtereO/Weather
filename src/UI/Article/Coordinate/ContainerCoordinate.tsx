import { connect } from "react-redux";
import Coordinate from "./Coordinate"
import {NewItem} from "../../../Types/type"
import {AppStateType} from "../../../Redux/Redux"
import getNews from "../../../Redux/Selectors/getNews"
import {findCityByCoordinateThunk,findCoordinateCityByNameThunk} from "../../../Redux/Reducers/reduceCoordinate"
import withHeader from "../../../HOC/withHeader"

type MSTPType={
    mainTheme:string
    description:string
    news:any//jsx element
    lat:number|null
    lon:number|null
    city:string|null
    filter:{
        city:string | null
        lat:number | null
        lon:number | null
    }
}
let MapStateToProps=(state:AppStateType)=>{
    return{
        mainTheme:state.coordinate.mainTheme,
        description:state.coordinate.description,
        news:getNews(state.coordinate.news),
        lat:state.coordinate.lat,
        lon:state.coordinate.lon,
        city:state.coordinate.city,
        filter:{
            city:state.coordinate.filter.city,
            lat:state.coordinate.filter.lat,
            lon:state.coordinate.filter.lon
        }
    }
}
type MDTPType={
    findCityByCoordinateThunk:(lat:number,lon:number)=>void
    findCoordinateCityByNameThunk:(cityName:string)=>void
}
type OwnPropsType={}

let CoordinateWithHeader=withHeader(Coordinate)

export default connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(MapStateToProps,{
    findCityByCoordinateThunk,findCoordinateCityByNameThunk
})(CoordinateWithHeader)