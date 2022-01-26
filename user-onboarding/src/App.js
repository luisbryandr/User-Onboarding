import React, { useState } from "react";
import Form from "./Components/Form";
import axios from 'axios';
import * as yup from 'yup';
import formSchema from "./Validation/FormSchema";

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErorrs = {
  username: '',
  password: '',
  email: '',
  tos: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErorrs);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users',formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err =>  setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  const handleChanges = (name, value) => {
    validate(name,value)
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className="App">
      <h1>User Intake Form!</h1>
      <Form
       values={formValues}
        change={handleChanges} 
        submit={handleSubmit}
        errors={formErrors}
      />
      {users.map(user => {
        return (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      )})}
          
    </div>
  );
}

export default App;
