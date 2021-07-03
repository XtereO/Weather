import React from "react"
import Debounce from "./Debounce"
import img from "../../media/snow.jpg"

type PropsType = {
    mainTheme: string,
    description: string
}

let Header: React.FC<PropsType> = (props) => {
    let indent = [] as Array<any>
    for (let i = 0; i < 10; i++) {
        indent.push(<br />)
    }
    return <div className={props.mainTheme + " container-fluid Header mb-4"}>
        <div className="d-flex">
            <div className="">
                <img className="img"
                    style={{ height: 100, width: 100, borderRadius: 2000 }} src={img} />
            </div>
            <div className="text-light">
                <h1>{props.mainTheme}</h1>
                <div className="ml-2">{props.description}</div>
            </div>
        </div>
        <div></div>
        <div>
            <Debounce />
        </div>
    </div>
}

export default Header