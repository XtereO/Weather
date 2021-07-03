import { Formik } from "formik"

type PropsType={
    lat:number
    lon:number
    submit:(lat:number,lon:number)=>void
}

let TwoBar:React.FC<PropsType>=(props)=>{
    return<Formik
    initialValues={{lat:props.lat,lon:props.lon}}
    validate={()=>{return {}}}
    onSubmit={(values)=>{
        props.submit(values.lat,values.lon)
    }}>
        {({
            handleChange,
            handleSubmit,
            values
        })=>{
            return<form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-5 mb-2 d-flex center">
                        Lat
                        <div className="ml-2">
                        <input name="lat" onChange={handleChange}
                        value={values.lat}
                        className="formInput w-100" type={"number"}/>
                        </div>
                    </div>
                    <div className="col-md-5 mb-2 d-flex center">
                        Lon 
                        <div className="ml-2">
                        <input name="lon" type={"number"} 
                        onChange={handleChange} value={values.lon}
                        className="formInput w-100"/>
                        </div>
                    </div>
                    <div className="col-md-2 center">
                        <button type={"submit"} className="btn btn-outline-primary">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        }}
    </Formik>
}

export default TwoBar