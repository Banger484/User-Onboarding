/* eslint-disable no-unused-vars */
import react, { useState } from 'react'
import '../App.css'

const Form = props => {

    const {values, submit, change } = props

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    return (
        <form className='form' onSubmit={onSubmit}>
            <input
                className='formInput'
                value={values.name}
                type='text'
                name='name'
                placeholder='Please enter your name.'
                onChange={onChange}
            />
            <input
                className='formInput'
                value={values.email}
                type='email'
                name='email'
                placeholder='Please enter your email address.'
                onChange={onChange}
            />
            <input
                className='formInput'
                value={values.password}
                type='password'
                name='password'
                placeholder='Please enter your password.'
                onChange={onChange}
            />
            <div className="ToS">
                <p>Agree to Terms of Service</p>
                <input
                    className='CheckboxToS'
                    type= 'checkbox'
                    name='serviceAgreement'
                    onChange={onChange}
                    checked={values.serviceAgreement}
                />
            </div>
            <button>Submit</button>
            
        </form>
    )}

export default Form