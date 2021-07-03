import { count } from "console"
import { useState } from "react"

type PropsType = {
    changePage: (page: number) => void
    page: number
    countButtons: number
    portionSize:number
}

let Pagination: React.FC<PropsType> = (props) => {
    let [portionNumber,setPortionNumber]=useState(1)
    let changePage = (e: any) => {
        props.changePage(e.target.id)
    }
    let buttons: Array<any> = []
    for (let i = 1; i <= props.countButtons; i++) {
        let e = null
        if (props.page == i) {
            e = <button id={`${i}`} className="btn btn-light"
                onClick={changePage}>
                {i}
            </button>
        } else {
            e = <button id={`${i}`} className="btn btn-primary"
                onClick={changePage}>
                {i}
            </button>
        }
        buttons.push(e)
    }

    let curButtons=([...buttons].slice
    ((portionNumber-1)*props.portionSize,portionNumber*props.portionSize))

    let onNext=()=>{
        setPortionNumber(portionNumber+1)
    }
    let onPrev=()=>{
        setPortionNumber(portionNumber-1)
    }
    
    return <div>
        <div className="right">
            {portionNumber>1 && 
            <button onClick={onPrev} className="btn btn-outline-primary">
                Prev
            </button>}
            {curButtons}
            {portionNumber*props.portionSize<props.countButtons 
            &&
            <button onClick={onNext} className="btn btn-outline-primary">
                Next
            </button>
            }
        </div>
    </div>
}

export default Pagination