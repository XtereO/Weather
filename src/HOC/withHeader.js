import Header from "../UI/Header/Header"


let withHeader=(Component)=>{
    return(props)=>{
        return<div>
            <Header mainTheme={props.mainTheme} description={props.description}/>
            <Component {...props} />
        </div>
    }
}

export default withHeader