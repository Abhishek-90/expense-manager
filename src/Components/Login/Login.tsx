import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { authentication } from "../../Variables/routes";
import { CustomButton } from "../Elements/Button";
import { CustomInput } from "../Elements/Input";
import {
  Container,
  Description,
  Wrapper,
  TitleDiv,
  LoginDiv,
  ButtonContainer,
} from "./LoginStyles";
import { H1, UL, ListItem, H3 } from "../Elements/CustomTags";
import * as method from "../../constants/Constant";

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
  const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
  const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (login.email.trim().length > 0 && login.password.trim().length > 0) {
      setEmailEmpty(false);
      setPasswordEmpty(false);
      try {
        const response = await fetch(
          `${authentication}login`,

          {
            method: method.POST,
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

        if (response.status === 200) {
          localStorage.setItem("authToken", json.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate("/dashboard");
        } else {
          //TODO: Add alert box here to display that Credentials are wrong.
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      login.email.trim().length === 0 && setEmailEmpty(true);
      login.password.trim().length === 0 && setPasswordEmpty(true);
    }
  };

  return (
    <Container>
      <Description>
        <H1>Expense Manager</H1>
        <UL>
          <ListItem>Expenses</ListItem>
          <ListItem>Investments</ListItem>
          <ListItem>Loans</ListItem>
        </UL>
        <H3>Manage all in One Place!</H3>
      </Description>
      <Wrapper>
        <TitleDiv>Expense Manager</TitleDiv>
        <form onSubmit={onSubmit}>
          <LoginDiv>
            <CustomInput
              name="email"
              type="text"
              placeholder="Email Address"
              value={login.email}
              handleChange={handleChange}
              border={emailEmpty}
            />

            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              handleChange={handleChange}
              border={passwordEmpty}
            />
            <ButtonContainer>
              <CustomButton type="submit" onClick={onSubmit} text="Login" />
              <Link to="/signup">
                <CustomButton text="Signup" />
              </Link>
            </ButtonContainer>
          </LoginDiv>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
