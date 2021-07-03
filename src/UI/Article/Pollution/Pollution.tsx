import React from "react"
import { setPollutionThunk } from "../../../Redux/Reducers/reducePollution"
import TwoBar from "../../Bricks/TwoBar"
import {HimItem} from "./ContainerPollution"

type PropsType={
    mainTheme:string
    description:string
    news:any//object with jsx
    aqi:number|null//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
    components:Array<HimItem>
    filter:{
        lat:number | null
        lon:number | null
    }
    setPollutionThunk:(lat:number,lon:number)=>void
}

let Pollution:React.FC<PropsType>=(props)=>{
    
    let pollutionItems=props.components.map(p=>
        <tr key={p.name}>
            <td>
                {p.name}
            </td>
            <td>
                {p.k}
            </td>
        </tr>)

    return<div className="container mt-4">
        {/*<div>
            <h1>
                Latest Features
            </h1>
            <div className="row">
                {[...props.news].reverse().slice(0,3)}
            </div>
        </div>*/}
        <h1 className="mt-4">Find out pollution on coordinate</h1>
        <TwoBar submit={props.setPollutionThunk}
        lat={props.filter.lat ? props.filter.lat : 0} 
        lon={props.filter.lon ? props.filter.lon : 0} />
         
        <table className="table table-primary">
            <thead>
                <th>Element</th>
                <th>Koeficent</th>
            </thead>
            <tbody>
                {pollutionItems}
            </tbody>
        </table>
        {props.aqi ?
        <div className="right"><h2>
            Average rating pollution - {6-props.aqi}
        </h2></div>:
        <div className="right"><h3>
            *Enter lat and lon to get analys
        </h3></div>
        }
    </div>
}

export default Pollution