import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormStyle from './Css/FormStyle.module.css'
class Register extends React.Component {


    constructor(props) {

        super();
        this.state = {}

    }


    render() {

        return (

            <Formik

                initialValues={{

                    firstName: 'vishal',
                    lastName: 'devani',
                    email: 'vishal.devani@gmail.com',
                    password: '123456',
                    confirmPassword: '123456',
                    acceptTandC: false,
                    gender: 'male'

                }}
                validationSchema={

                    Yup.object().shape({

                        firstName: Yup.string().required("First Name Is Require"),
                        lastName: Yup.string().required("Last Name Is require"),
                        email: Yup.string().email("Email is Invalid").required("Email is require"),
                        password: Yup.string().min(6, "minimum password length must be 6 ").required("Password is required"),
                        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Does Not Match').required("Confirm Password Require"),
                        acceptTandC: Yup.bool().oneOf([true], "You must accept T&C"),
                        gender:Yup.string().required("Gender Requires")
                    })
                }

                onSubmit={formData => { alert(JSON.stringify(formData)) }}
            >
                {
                    ({ errors, touched }) => (

                        <Form>
                            <div className={FormStyle.FormMainDiv}>
                                <div className={FormStyle.formInnerDiv} >
                                    <div className="d-flex justify-content-center align-item-center mt-4">
                                        <p><b>Sign up</b></p>
                                    </div>
                                    <div>
                                        <div className='input-group mb-3'>

                                            <div className="input-group-prepend">

                                                <span className="input-group-text">@</span>
                                            </div>
                                            <Field name="firstName" type="text" className={"form-control " + (errors.firstName && touched.firstName ? 'is-invalid' : '')} placeholder="Firstname" />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className='input-group mb-3'>

                                            <div className="input-group-prepend">

                                                <span className="input-group-text">@</span>
                                            </div>
                                            <Field name="lastName" type="text" className={"form-control " + (errors.lastName && touched.lastName ? 'is-invalid' : '')} placeholder="LastName" />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className="input-group-prepend">

                                                <span className="input-group-text">@</span>
                                            </div>
                                            <Field name="email" type="text" className={"form-control " + (errors.email && touched.email ? 'is-invalid' : '')} placeholder="Email" />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className="input-group-prepend">

                                                <span className="input-group-text">@</span>
                                            </div>
                                            <Field name="password" type="password" className={"form-control " + (errors.password && touched.password ? 'is-invalid' : '')} placeholder="Password" />
                                           
                                        </div>
                                        <div className='input-group mb-3'>
                                            <div className="input-group-prepend">

                                                <span className="input-group-text">@</span>
                                            </div>
                                            <Field name="confirmPassword" type="password" className={"form-control " + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} placeholder="confirm Password" />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </div>


                                        {/* <div class="input-group d-flex justify-content-between " >
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">@</span>
                                            </div>

                                            <div>
                                              <Field type="radio" name="gender" className="form-check-input"></Field>
                                                <span>  Male</span>
                                            </div>
                                            <div>
                                                <input type="radio" />
                                                <span>  Female</span>
                                            </div>


                                        </div> */}

{/* radio button  */}


                                        <div class="custom-control custom-radio custom-control-inline">
                                            <Field type="radio" class="custom-control-input" id="customRadio" name="gender" value="male" checked  />
                                            <label class="custom-control-label" for="customRadio">Male</label>
                                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <Field type="radio"  class="custom-control-input" id="customRadio2" name="gender" value="female"  />
                                            <label class="custom-control-label" for="customRadio2">Female</label>
                                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                        </div>



{/* Department */}
<div>
<label for="cars">Department</label>
<select name="department" class="custom-select">
    <option selected>HR</option>
    <option value="Devlopment">Devlopment</option>
    <option value="Design">Designing</option>
    <option value="Testing">Testing</option>
  </select>
  </div>




                                        <div className="form-group form-check">
                                            <Field type="checkbox" name="acceptTandC" className={'form-check-input ' + (errors.acceptTandC && touched.acceptTandC ? ' is-invalid' : '')} />
                                            <label htmlFor="acceptTandC" className="form-check-label">Accept Terms & Conditions</label>
                                            <ErrorMessage name="acceptTandC" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                <input type="submit" value="submit" />
                                <input type="reset" value="reset" />
                            </div>


                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }

            </Formik>
        )
    }
}

export default Register