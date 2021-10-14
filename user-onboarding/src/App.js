/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  serviceAgreement: false
}
// const initialUsers = []

function App() {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      serviceAgreement: !!formValues.serviceAgreement
    }
    // console.log(newUser)
    postNewUser(newUser)
  }
  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }
 
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data)
        setUsers([res.data], ...users);
      }).catch(err => {
        console.error(err);
      })
  }
  console.log(users)

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
