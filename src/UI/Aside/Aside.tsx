import React from "react"
import { NavLink } from "react-router-dom"

type PropsType={
    show:boolean
}

let Aside:React.FC<PropsType>=(props)=>{
    console.log(props)
    return<div className="Aside" style={{height:"100%"}}>
        <br />
            <div>
            <ItemAside navigate="Weather" show={props.show}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-thermometer" viewBox="0 0 16 16">
            <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z"/>
            <path d="M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            </ItemAside>
            </div>
            <div>
            <ItemAside navigate="Coordinate" show={props.show}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
            </svg>
            </ItemAside>
            </div>
            <div>
            <ItemAside navigate="Pollution" show={props.show}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-tree" viewBox="0 0 16 16">
            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/>
            </svg>
            </ItemAside>
            </div>
    </div>
}

type PropsAsideType={
    navigate:string,
    show:boolean
}
let ItemAside:React.FC<PropsAsideType>=(props)=>{
    if(props.show){
        return<NavLink style={{textDecoration:"none"}} 
        to={props.show ? props.navigate : ""}
        className="itemAside pt-4 px-2">
            {props.navigate}
            <div className="right">
            {props.children}
            </div>
        </NavLink>
    }else{
        return<div className="itemAside center pt-4">
            {props.children}
        </div>
        }
}

export default (Aside)