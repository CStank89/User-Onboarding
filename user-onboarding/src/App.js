import React, { useState } from 'react';
import Form from './components/Form'
import * as yup from 'yup'
import './App.css';



const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',

}


function App() {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState()



  const onChange = evt => {
        
    const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        
      }


  const validate = (password, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(password)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [password]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [password]: err.errors[0]
        });
      });
  }


  return (
    <div className="App">
      <Form
      change={change} />
    </div>
  );
}

export default App;
