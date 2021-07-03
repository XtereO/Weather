import React from "react"
import TwoBar from "../../Bricks/TwoBar"
import SearchBar from "../../Bricks/SearchBar"

type PropsType={
    mainTheme:string
    description:string
    news:any//jsx elements
    lat:number|null
    lon:number|null
    city:string|null
    filter:{
        city:string | null
        lat:number | null
        lon:number | null
    }
    findCityByCoordinateThunk:(lat:number,lon:number)=>void
    findCoordinateCityByNameThunk:(cityName:string)=>void
}

let Coordinate:React.FC<PropsType>=(props)=>{
    return<div className="container mt-4">
        {/*<div>
            <h1>
                Latest Features
            </h1>
            <div className="row">
                {[...props.news].reverse().slice(0,3)}
            </div>
        </div>*/}
        <div>
            <h1>Find city by coordinates</h1>
            <TwoBar submit={props.findCityByCoordinateThunk}
            lat={props.filter.lat ? props.filter.lat : 0} 
            lon={props.filter.lat ? props.filter.lat : 0}/>
            <div className="center mt-2">
                <h2 className="text-dark">{props.city && props.city}</h2>
            </div>
        </div>
        <div className="mt-4">
            <h1>Get coordinates of city</h1>
            <div className="">
            <SearchBar term={props.filter.city ? props.filter.city : ""}
            submit={props.findCoordinateCityByNameThunk}/>
            </div>
            <div className="center mt-2">
                {props.lat && <div className="row">
                <div className="col-md-6 center">
                    <h3>lat {props.lat}</h3> 
                </div>
                <div className="col-md-6 center">
                    <h3>lon {props.lon}</h3>
                </div>
                </div>}
            </div>
        </div>
    </div>
}

export default Coordinate