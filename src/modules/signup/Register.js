import {Component} from "react";
import {Navigate} from "react-router-dom";
import {register} from './auth'
import {Field, Form, Formik} from "formik";
import Header from "../header/Header";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.clearFormData()
    }

    clearFormData(){
        this.formData = {
            email: '',
            password: '',
        }
    }

    handleEmailChange(evt){
        this.formData.email = evt.target.value
    }

    handlePasswordChange(evt){
        this.formData.password = evt.target.value
    }

    async handleFormSubmit(evt){
        evt.preventDefault()
        const result = await register (this.formData.email, this.formData.password)
        if(typeof result !== 'object'){
            console.log(result)
        }
    }

    render(){
        if(this.props.currentUser){
            return <Navigate to="" replace />
        }
        else
        return(
            <>
                <Header />
                <h1>Регистрация</h1>
                <div className="" style={{'backgroundColor' : '#D1D1D1'}}></div>
            </>
        )
    }
}