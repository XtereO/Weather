import { Formik } from "formik"
import React from "react"

type PropsType={
    term:string,
    submit:(city:string)=>void
}

let SearchBar:React.FC<PropsType>=React.memo((props)=>{
    return<Formik
    initialValues={{term:props.term}}
    validate={(values:{term:string})=>{
        const error={
            maxLength:null as null|string
        }
        if(values.term.length>40){
            error.maxLength="max length is 40"
            return error
        }
        return {}
    }}
    onSubmit={(values)=>{
        props.submit(values.term)
    }}
    >
    {({
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        values
    })=>{
        return<form onSubmit={handleSubmit}>
            <div className="d-flex center">
                <input name={"term"} style={{background:"transparent", border: "none", 
                borderBottom: "1px solid black",outline:"none",maxWidth:"290px"}} onChange={handleChange} 
                value={values.term} type={"search"} />
                <button type="submit" className="btn btn-outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </button>
            </div>
        </form>
    }}
    </Formik>
})

export default SearchBar