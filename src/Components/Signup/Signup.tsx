import { useState } from "react";
import { useNavigate } from "react-router";
import * as R from "../../Shared/Variables/routes";
import * as method from "../../Shared/constants/Status";
import { Wrapper, SignUpDiv, ButtonContainer, Input } from "./SignupStyles";
import { Button } from "../../Shared/Elements/Button";
import Spinner from "../../Shared/Elements/Spinner";
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
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  const onChange = (e: any) => {
    setSignup({ ...signup, [e?.target?.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsSigningUp(true);
      const response = await fetch(R.SINGUP, {
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
      console.log(response);
      if (response.status === 201) {
        const json = await response.json();
        localStorage.setItem("authToken", json.authToken);
        setIsSigningUp(false);
        navigate("/dashboard");
      } else {
        //TODO: Add Alert in case of Sign up fails along with error.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Wrapper>
        <h1>Sign Up</h1>
        <form className="my-3" onSubmit={onSubmit}>
          <SignUpDiv>
            <Input
              type="text"
              value={signup.fname}
              name="fname"
              placeholder="Enter you Full Name"
              onChange={onChange}
            />
            <Input
              type="text"
              value={signup.email}
              name="email"
              placeholder="Email Address"
              onChange={onChange}
            />
            <Input
              type="password"
              value={signup.password}
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <Input
              type="password"
              value={signup.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={onChange}
            />
            <ButtonContainer>
              <Button type="submit">
                {isSigningUp ? <Spinner /> : "SignUp"}
              </Button>
            </ButtonContainer>
          </SignUpDiv>
        </form>
      </Wrapper>
    </>
  );
};

export default Signup;
