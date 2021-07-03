import NewFutuare from "../../UI/Bricks/NewFutuare"
import {NewItem} from "../../Types/type"

let getNews=(items:Array<NewItem>)=>{
    return items.map(e=><NewFutuare description={e.description}
    img={e.img}/>)
}
export default getNews