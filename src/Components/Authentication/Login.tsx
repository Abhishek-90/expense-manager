import React, { useState } from "react";
import { useNavigate } from "react-router";
import { authentication } from "../../Variables/routes";

export interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${authentication}login`,

        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: login.email,
            password: login.password,
          }),
        }
      );

      const json = await response.json();

      if (json.status === "success") {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/dashboard");
      } else {
        //TODO: Add alert box here to display that Credentials are wrong.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <h2>Login Page</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
