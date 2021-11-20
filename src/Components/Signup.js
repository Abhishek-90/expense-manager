import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Signup = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    })

    const onChange = (e)=>{
        setSignup({...signup, [e.target.name]:e.target.value});
    }

    const onSubmit = async (e)=>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/auth/signup',
                {
                    method:"POST",
                    headers:{
                        'Content-type':'application/json'   
                    },
                    body: JSON.stringify(signup)
                }
            );

            if(response !== null){
                localStorage.setItem('authToken',response.authToken);
                navigate('/dashboard');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="container my-4">
            <h2>Sign Up</h2>
            <form className="my-3" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={signup.fname} id="fname" name="fname" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={signup.email} id="email" aria-describedby="emailHelp" name="email" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={signup.password} id="password" name="password" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={signup.cpassword} id="cpassword" name="cpassword" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
