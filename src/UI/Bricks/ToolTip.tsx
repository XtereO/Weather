import ReactDOM from "react-dom"
import React, { useState } from "react"

type PropsType={
    text:string
}

let TooltipFunc:React.FC<PropsType> = (props) => {

    let [state, setState] = useState({
        opacity: false,
        top: 0,
        left: 0
    })

    let toggle = (e:any) => {
        const TooltipNode:any = ReactDOM.findDOMNode(e.target)
        setState({
            opacity: !state.opacity,
            top: TooltipNode.offsetTop+30,
            left: TooltipNode.offsetLeft
        })
    }
    const style = {
        opacity: +state.opacity,
        top: state.top,
        left: state.left,
        zIndex: state.opacity ? 1000 : -1000
    }
    return <div style={{ display: "inline" }}>
        <span onMouseEnter={toggle} onMouseOut={toggle}>
            {props.children}
        </span>
        <div style={style} className="tooltip bottom mt-1" role={"tooltip"}>
            <div className="tooltip-arrow"></div>
            <div className="tooltip-inner">
                {props.text}
            </div>
        </div>
    </div>
}


export default TooltipFunc

