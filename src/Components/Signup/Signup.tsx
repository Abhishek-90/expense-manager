import { useState } from "react";
import { useNavigate } from "react-router";
import { Wrapper, SignUpDiv, ButtonContainer, Input } from "./SignupStyles";
import { Button } from "../../Shared/Elements/Button";
import Spinner from "../../Shared/Elements/Spinner";
import * as R from "../../Shared/Variables/routes";
import * as method from "../../Shared/constants/Status";
import * as SC from "../../Shared/constants/StatusCode";

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
  const [message, setMessage] = useState<String>("");

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
      setTimeout(() => setIsSigningUp(false), 900);
      if (response.status === SC.CREATED) {
        setMessage("User Created, Welcome!");
        setTimeout(() => navigate("/dashboard"), 1150);
      } else if (response.status === SC.EXISTS){
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
          <SignUpDiv>
            <Input
              type="text"
              value={signup.fname}
              name="fname"
              placeholder="Full Name"
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
              <Button type="button" onClick={onSubmit}>
                {isSigningUp ? <Spinner /> : "SignUp"}
              </Button>
            </ButtonContainer>
          </SignUpDiv>
      </Wrapper>
    </>
  );
};

export default Signup;
