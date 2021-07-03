import { connect } from "react-redux";
import { compose } from "redux";
import withHeader from "../../../HOC/withHeader"
import {AppStateType} from "../../../Redux/Redux"
import Main from "./Main"
import {doFeedback, changePage,FeedbackType} from "../../../Redux/Reducers/reduceMain"
import {getFeedbacks} from "../../../Redux/Selectors/mainSelector"

type MSTPType={
    mainTheme:string,
    description:string,
    feedbacks:any//array with jsx
    page:number
    portionSize:number
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        mainTheme:state.main.mainTheme,
        description:state.main.description,
        feedbacks:getFeedbacks(state),
        page:state.main.page,
        portionSize:state.main.portionSize
    }
}
type MDTPType={
    doFeedback:(text:string,name:string)=>void
    changePage:(page:number)=>void
}
type OwnPropsType={}

export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>
    (MapStateToProps,{doFeedback,changePage}),
    withHeader
)(Main)