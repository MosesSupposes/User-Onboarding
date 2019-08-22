import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

function UserForm({ errors, touched, values, status }) {
    return (
        <>
        <h2>Create Account</h2>
        <Form>
            <Field name="name" type="text" placeholder="name" />
            {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
            )} 

            <Field name="email" type="text" placeholder="email" />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )} 

            <Field name="password" type="text" placeholder="password" />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )} 

            <label>I accept and agree to the Terms of Use
                <Field name="tos" type="checkbox" checked={values.tos} />
            </label>
            {touched.tos && errors.tos && (
                <p className="error">{errors.tos}</p>
            )} 
            <button type="submit">Submit</button>
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
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('What did your mama name you?'),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        tos: Yup.bool().oneOf([true], 'Please agree to our terms of service')
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post('https://reqres.in/api/users', values)
            .then(res => {
                setStatus(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }
})(UserForm)

export default FormikUserForm