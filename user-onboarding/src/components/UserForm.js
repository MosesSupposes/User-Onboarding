import React from 'react'
import { Form, Field, withFormik } from 'formik'

function UserForm({ errors, touched, values, status }) {
    return (
        <>
        <h2>Create Account</h2>
        <Form>
            <Field name="name" type="text" placeholder="name" />
            <Field name="email" type="text" placeholder="email" />
            <Field name="password" type="text" placeholder="password" />
            <Field name="tos" type="checkbox" checked={values.tos} />
            <button role="submit">Submit</button>
        </Form>
        </>
    )
}
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        }
    }
})(UserForm)

export default FormikUserForm