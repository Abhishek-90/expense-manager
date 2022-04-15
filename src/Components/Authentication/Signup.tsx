import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { authentication } from '../../constants/routes.js';

export interface ISignUp {
    fname:string,
    email:string,
    password:string,
    confirmPassword:string
}

const Signup = () => {
    const navigate = useNavigate();
    const [signup, setSignup] = useState<ISignUp>({
        fname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const onChange = (e:any)=>{
        setSignup({...signup, [e?.target?.name]:e.target.value});
    }

    const onSubmit = async (e:any)=>{
        e.preventDefault();

        try{
            const response = await fetch(`${authentication}signup`,
                {
                    method:"POST",
                    headers:{
                        'Content-type':'application/json',
                        'Access-Control-Allow-Origin':"*",
                           
                    },
                    body: JSON.stringify({
                        "name":signup.fname,
                        "email": signup.email,
                        "password": signup.password
                    })
                }
            );
            
            const json = await response.json();

            console.log(json);
            
            if(json.status === 'success'){
                localStorage.setItem('authToken',json.authToken);
                navigate('/dashboard');
            }
            else{
                //TODO: Add Alert in case of Sign up fails along with error.
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
                    <input type="password" className="form-control" value={signup.confirmPassword} id="cpassword" name="cpassword" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
