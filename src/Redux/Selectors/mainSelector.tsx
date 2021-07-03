import {AppStateType} from "../Redux"
import Feedback from "../../UI/Article/Main/Feedback"

export let getFeedbacks=(state:AppStateType)=>{
    return state.main.feedbacks.map(f=>
    <Feedback name={f.name} text={f.text} date={f.date}  />)
}
