import React from "react"
import { NavLink } from "react-router-dom"
import {FeedbackType} from "../../../Redux/Reducers/reduceMain"
import TextInput from "../../Bricks/TextInput"
import Pagination from "../../Bricks/Pagination"
import Tooltip from "../../Bricks/ToolTip"
 
type PropsType = {
    mainTheme: string
    description: string
    feedbacks:Array<any>//Array with jsx
    page:number
    portionSize:number
    changePage:(page:number)=>void
    doFeedback:(text:string,name:string)=>void
}

let Main: React.FC<PropsType> = (props) => {
    let Link = { textDecoration: "none", color: "blue" }
    return <div className="container ">
        <div className="row mx-2">
            <div style={{ fontSize: 30 }} className="col-md-4">
                <h1>About project</h1>
                <div className="container">
                    Its project was created for
                    geographical dates
        such as <NavLink style={Link} to="Pollution">
                        Pollution
        </NavLink> , <NavLink style={Link} to="Weather">
                        Weather
        </NavLink> forecast , <NavLink style={Link} to="Coordinater">
                        Coordinate
        </NavLink> - and all its arround while the world.
                </div>
            </div>
            <div style={{ fontSize: 30 }} className="col-md-4">
                <h1>API</h1>
                <div className="container">
                    All dates was geting
               from API - <a href="https://openweathermap.org/" 
                            target="_blank" style={Link}>
                        <Tooltip text={"Weather API"}>OpenWeather</Tooltip>
                </a> - Thanks a lot them.
                </div>
            </div>
            <div className="col-md-4">
                <h1>And other information</h1>
                <div className="container" style={{ fontSize: 30 }}>
                    Maket this project
                    and idea was
                taken from site - <a href="https://www.noaa.gov/" style={Link}
                                    target="_blank">
                        <Tooltip text={"Company of Explorers"}>NOAA</Tooltip>
                </a> - Thanks a lot them.
            </div>
            </div>
        </div>
        {/*<div className="container">
            <h1>Feedbacks
                <div style={{fontSize:28}} className="right">
                    <Pagination countButtons={Math.ceil(props.feedbacks.length/props.portionSize)}
                    portionSize={props.portionSize}  
                    page={props.page} changePage={props.changePage}/>
                </div>
            </h1>
            <div className="container">
                {[...[...props.feedbacks].reverse()].slice
                ((props.page-1)*props.portionSize,props.page*props.portionSize)}
                <div className="mt-2">
                    <TextInput textHeader={"Leave feedback"}
                    submit={props.doFeedback} />
                </div>
            </div>
        </div>*/}
    </div>
}

export default Main