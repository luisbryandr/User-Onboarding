import React from "react";

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos} = props.values

    const handleChanges = e =>{
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        submit();
    }
    return (
        <div>
             <p>{errors.username}</p>
             <p>{errors.email}</p>
             <p>{errors.password}</p>
             <p>{errors.tos}</p>            
            <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                    type="text"
                    placeholder="Enter name here"
                    value={username}
                    onChange={handleChanges}
                    name="username"
                />
            </label>
            <label>Email:
                <input
                    type="text"
                    placeholder='Enter email here'
                    value={email}
                    onChange={handleChanges}
                    name="email"
                />
            </label>
            <label>Password:
                <input 
                    type="password"
                    placeholder='Enter password here'
                    value={password}
                    onChange={handleChanges}
                    name="password"
                />
            </label>
            <label>Terms of Service
                <input 
                    type="checkbox"
                    onChange={handleChanges}
                    name="tos"
                    checked={tos}
                />
               
            </label>
            <input 
                type="submit"
                value="Submit information"
            />
        </form>
        </div>
    )
}

export default Form