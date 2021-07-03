import { DayItem, NewItem } from "../../../Types/type";//Type
import React, { useEffect, useState } from "react";
import SearchBar from "../../Bricks/SearchBar"

type PropsType={
    description:string,
    mainTheme:string,
    news:Array<any>//jsx object
    allWeather:Array<DayItem>
    setWeatherThunk:(city?:string)=>void
    term:string
}

let Weather:React.FC<PropsType>=(props)=>{
    let [timeDate,setTimeDate]=useState((new Date()).valueOf())
    let [typeButton,setTypeButton]=useState(true)//true - next,false - prev
    let changeWeek=()=>{
        if(typeButton){
            setTimeDate(timeDate+24*60*60*1000*7)
        }
        else{
            setTimeDate(timeDate-24*60*60*1000*7)
        }
        setTypeButton(!typeButton)
    }

    useEffect(()=>{
        props.setWeatherThunk()
    },[])
    return<div className="container mt-4">
        {/*<div>
            <h1>
                Latest Features
            </h1>
            <div className="row">
                {[...props.news].reverse().slice(0,3)}
            </div>
        </div>*/}
        <h1 className="mt-4">
            Forecast for today
        <div className="right mb-2">
            <SearchBar term={props.term ? props.term : "London"} submit={props.setWeatherThunk} />
        </div>
        </h1>
        <div className="">
            <StatisticForDay {...props.allWeather[0]}/>
        </div>
        <div className="mt-4">
            <h1>
                Forecst for week
                <div className="right">
                    <button className="btn btn-outline-primary" 
                    onClick={changeWeek}>
                        {typeButton ? "Next" : "Prev"}
                    </button>
                </div>
            </h1>
            {props.allWeather.length>5 &&
            (typeButton ? 
            <StatisticForWeek date={timeDate} allWeather={props.allWeather.slice(0,7)} />
            :
            <StatisticForWeek date={timeDate} allWeather={props.allWeather.slice(7,14)} />)}        
        </div>
    </div>
}

let StatisticForDay:React.FC<DayItem>=(props)=>{
    return<table className="table table-primary 
    table-bordered table-striped border-light">
    <thead>
        <tr>
            <th>Temperature</th>
            <th>Wind</th>
            <th>Description</th>
        </tr>
    </thead>
    {props && <tbody>
        <tr>
            <td>
            {props.main.temp 
            && Math.ceil(props.main.temp -273)}
            <sup>o</sup>
            <div className="right">
            {props.main.temp-273 && props.main.temp-273 <= 0 &&
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-asterisk" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
            </svg>}
            {props.main.temp-273 && props.main.temp-273 > 0 &&
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>}
            </div>
            </td>
            <td>{props.wind.speed}</td>
            <td>{props.weather[0].description}</td>
        </tr>
    </tbody>}
</table>
}
type StatisticForDayType={
    allWeather:Array<DayItem>
    date:number
}
let StatisticForWeek:React.FC<StatisticForDayType>=(props)=>{
    let allMonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let curDate=props.date;
    let weathers=props.allWeather.map(w=>{
        curDate=(new Date(curDate+24*60*60*1000)).valueOf()
        return<tr key={curDate}>
            <td>{new Date(curDate-24*60*60*1000).getDate()}</td>
            <td className="center">
                {Math.ceil(w.main.temp -273)}
                <sup>
                    o
                </sup>
            </td>
            <td>{w.wind.speed}</td>
        </tr>})
    return<div>
        <table className="table table-primary 
        table-bordered table-striped border-light">
            <thead>
                <tr>
                    <th>{allMonth[(new Date(props.date)).getMonth()]}</th>
                    <th>Temperature</th>
                    <th>Wind</th>
                </tr>
            </thead>
            <tbody>
                {weathers}
            </tbody>
        </table>
    </div>
}

export default Weather