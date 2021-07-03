import { defaultMaxListeners } from "events"
import { number } from "prop-types"
import { act } from "react-dom/test-utils"

let Do_Feedback:"reduceMain/Do_Feedback"="reduceMain/Do_Feedback"
let Set_Page:"reduceMain/Set_Page"="reduceMain/Set_Page"

export type FeedbackType={
    name:string
    text:string
    date:string
}
let initialState={
    mainTheme: "Main" as string,
    description: "About us" as string,
    feedbacks:[{name:"XtrOne",text:"LoL",date:"orbidOL"}] as Array<FeedbackType>,
    page:1 as number,
    portionSize:5 as number
}

type InitialStateType=typeof initialState
type ActionType=DoFeedbackType | ChangePageType

let reduceMain=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case Do_Feedback:
            return{...state,feedbacks:[...state.feedbacks,action.feedback]}
        case Set_Page:
            return{...state,page:action.page}    
        default:
            return state
    }
}

type ChangePageType={
    type:typeof Set_Page
    page:number
}
export let changePage=(page:number):ChangePageType=>{
    return{
        type:Set_Page,
        page
    }
}

type DoFeedbackType={
    type:typeof Do_Feedback
    feedback:{
        text:string
        name:string
        date:string
    }
}

export let doFeedback=(text:string,name:string):DoFeedbackType=>{
    return{
        type:Do_Feedback,
        feedback:{text,name,date:(new Date()).toLocaleString()}
    }
}

export default reduceMain