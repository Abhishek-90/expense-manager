import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { authentication } from "../../Variables/routes";
import { CustomButton } from "../Elements/Button";
import { CustomInput } from "../Elements/Input";
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

  // const onChange = (e: any) => {
  //   setLogin({ ...login, [e.target.name]: e.target.value });
  // };

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
    <div className="container">
      <form onSubmit={onSubmit}>
        <Wrapper>
          <LoginDiv>
            <CustomInput type="text" placeholder="Email Address" />
            <CustomInput type="password" placeholder="Password" />
            <ButtonContainer>
              <CustomButton type="submit" onClick={onSubmit} text="Login" />
              <Link to="/signup">
                <CustomButton text="Signup" />
              </Link>
            </ButtonContainer>
          </LoginDiv>
        </Wrapper>
      </form>
    </div>
  );
};

export default Login;
