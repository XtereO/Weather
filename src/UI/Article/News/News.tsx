import React from "react"
import BlockNews from "./BlockNews"

type PropsType={
    mainTheme:string
    description:string
    coordinateNews:Array<any>
    pollutionNews:Array<any>
    weatherNews:Array<any>
    pagePollution:number
    pageCoordinate:number
    pageWeather:number
    changePagePollution:(page:number)=>void
    changePageWeather:(page:number)=>void
    changePageCoordinate:(page:number)=>void
}

let News:React.FC<PropsType>=(props)=>{
    return<div className="container">
        <div className="mt-4">
            <BlockNews theme={"Weather"} newsItems={[...props.weatherNews].reverse()}
            page={props.pageWeather} changePage={props.changePageWeather}/>
        </div>
        <div className="mt-4">
            <BlockNews theme={"Coordinate"} newsItems={[...props.coordinateNews].reverse()}
            page={props.pageCoordinate} changePage={props.changePageCoordinate}/>
        </div>
        <div className="mt-4">
            <BlockNews theme={"Pollution"} newsItems={[...props.pollutionNews].reverse()}
            page={props.pagePollution} changePage={props.changePagePollution}/>
        </div>
    </div>
}

export default News