import React, { useState } from "react";
import { useNavigate } from "react-router";
import { authentication } from "../../Variables/routes";
import { CustomButton } from "../Elements/Buttons/CustomButton";
import { Wrapper, LoginDiv, ButtonContainer } from "./LoginStyles";

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
      <form onSubmit={onSubmit}>
        <Wrapper>
          <LoginDiv>
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label mt-3">
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
            <ButtonContainer>
            <CustomButton type="submit" onClick={onSubmit} text="Login" />
            <CustomButton type="submit" onClick={onSubmit} text="Signup" />
            </ButtonContainer>
          </LoginDiv>
        </Wrapper>
      </form>
    </div>
  );
};

export default Login;
