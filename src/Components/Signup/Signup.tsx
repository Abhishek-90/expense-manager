import React, { useState } from "react";
import { useNavigate } from "react-router";
import { authentication } from "../../Variables/routes";
import * as method from "../../constants/Constant";
import { Container, Wrapper, SignUpDiv, ButtonContainer } from "./SignupStyles";
import { CustomInput } from "../Elements/Input";
import { CustomButton } from "../Elements/Button";
import { H1 } from "../Elements/CustomTags"
export interface ISignUp {
  fname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<ISignUp>({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: any) => {
    setSignup({ ...signup, [e?.target?.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`${authentication}signup`, {
        method: method.POST,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: signup.fname,
          email: signup.email,
          password: signup.password,
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        localStorage.setItem("authToken", json.authToken);
        navigate("/dashboard");
      } else {
        //TODO: Add Alert in case of Sign up fails along with error.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <h1>Sign Up</h1>
        <form className="my-3" onSubmit={onSubmit}>
          <SignUpDiv>
            <CustomInput
              type="text"
              value={signup.fname}
              name="fname"
              placeholder="Your Full Name"
              handleChange={onChange}
            />
            <CustomInput
              type="text"
              value={signup.email}
              name="email"
              placeholder="Email Address"
              handleChange={onChange}
            />
            <CustomInput
              type="text"
              value={signup.password}
              name="password"
              placeholder="Password"
              handleChange={onChange}
            />
            <CustomInput
              type="text"
              value={signup.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              handleChange={onChange}
            />
            <ButtonContainer>
              <CustomButton type="submit" text="Submit" />
            </ButtonContainer>
          </SignUpDiv>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
