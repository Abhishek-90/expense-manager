import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email:"",
        password:"",
    })

    const onChange = (e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const onSubmit = async (e)=>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/auth/login',
                {
                    method:"POST",
                    headers:{
                        'Content-type':'application/json'   
                    },
                    body: JSON.stringify({
                        email: login.email,
                        password: login.password
                    })
                }
            );

            const json = await response.json();
            console.log(json);
            if(json.success === 'success'){
                localStorage.setItem('authToken',json.authToken);
                navigate('/dashboard');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <div className="container my-4">
            <h2>Login Page</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    </>
    )
}

export default Login
