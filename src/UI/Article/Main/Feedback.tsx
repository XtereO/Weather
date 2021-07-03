import React from "react"
type PropsType={
    text:string
    name:string
    date:string
}

let Feedback:React.FC<PropsType>=(props)=>{
    return<div className="card mt-2">
        <div className="card-header">
            {props.name}
            <div className="right">
                {props.date}
            </div>
        </div>
        <div className="card-body card-container">
            {props.text}
        </div>
    </div>
}

export default Feedback