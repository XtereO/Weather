import Pagination from "../../Bricks/Pagination"

type PropsType={
    theme:string
    newsItems:Array<any>
    page:number
    changePage:(page:number)=>void
}

let BlockNews:React.FC<PropsType>=(props)=>{
    return<div>
        <h1>
            {props.theme} News
            <div className="right">
            <Pagination changePage={props.changePage} portionSize={3}
            page={props.page} countButtons={Math.ceil(props.newsItems.length/3)}/>
            </div>
        </h1>
        <div className="container row">
            {[...props.newsItems].slice((props.page-1)*3,props.page*3)}
        </div>
    </div>
}

export default BlockNews