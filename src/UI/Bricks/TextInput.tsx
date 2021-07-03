import { error } from "console"
import { Formik } from "formik"

type PropsType = {
    textHeader: string
    submit: (text: string, name: string) => void
}

let TextInput: React.FC<PropsType> = (props) => {
    return <div className="card">
        <div className="card-header">{props.textHeader}</div>
        <div className="card-body">
            <Formik
                initialValues={{ text: "", name: "" }}
                onSubmit={(values, { setSubmitting }) => {
                    props.submit(values.text, values.name)
                    setSubmitting(true)
                }}
                validate={(values) => {
                    const errors = { text: "", name: "" }
                    if (values.name.trim().length === 0) {
                        errors.name = "Name is required"
                        return errors
                    }
                    if (values.text.trim().length === 0) {
                        errors.text = "text is required"
                        return errors
                    }
                    return {}
                }}>
                {({
                    handleChange,
                    handleSubmit,
                    values, touched,
                    errors,isSubmitting
                }) => {
                    let nameError = errors.name && touched.name
                    let textError = errors.text && touched.text
                    return <form onSubmit={handleSubmit}>
                        <div>
                            <input value={values.name} onChange={handleChange}
                                name="name" placeholder={nameError 
                                ? errors.name : "Write here your name"}
                                className={nameError ? "form-control is-invalid" :
                                "form-control"} />
                        </div>

                        <div>
                            <textarea name="text" className={textError
                                ? "form-control is-invalid" : "form-control"}
                                onChange={handleChange} value={values.text}
                                placeholder={textError ?
                                    errors.text : "Write here your feedback"} />
                        </div>
                        {isSubmitting ? 
                        <div className="text-primary center">
                            <h3>Thanks for feedback</h3>
                        </div> :
                        <div className="w-100">
                            <button type={"submit"} className="btn btn-outline-primary w-100">
                                leave feedback
                            </button>
                        </div>}
                    </form>
                }}
            </Formik>
        </div>
    </div>
}

export default TextInput