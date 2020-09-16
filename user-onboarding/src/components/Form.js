import React from 'react'

const Form = (props) => {
    const { name, email, password } = props 
    
    
    const onSubmit = evt => {
        evt.preventDefault()
      }




    return (
        <div>
        
            <input 
            type='text'
            value={name}
            placeholder='name'
            onChange={onChange}/>
            <input 
            type='text'
            value={email}
            placeholder='email'
            onChange={onChange}/>
            <input 
            type='text'
            value={password}
            placeholder='password'
            onChange={onChange}/>
            <input
            type='checkbox' 
            checked={true} />
            <button
             onSubmit={onSubmit}
            >Submit</button>
        </div>
    )
}

export default Form
