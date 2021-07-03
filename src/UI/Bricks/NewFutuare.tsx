import { NewItem } from "../../Types/type";

let NewFutuare:React.FC<NewItem>=(props)=>{
    return<div className="col-md-4 px-2 pt-2">
        <div className=" card">
        <div className="">
            <img className="img w-100 rounded" src={props.img} />
        </div>
        <div className="card-body">
            {props.description}
        </div>
        </div>
    </div>
}

export default NewFutuare