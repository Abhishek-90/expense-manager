import { useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../../Shared/Elements/Spinner";
import * as S from "./SignupStyles";
import * as T from "../../Shared/Elements/Button";
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
      } else if (response.status === SC.EXISTS) {
        //TODO: Add Alert in case of Sign up fails along with error.
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <h1>Sign Up</h1>
        <S.SignUpDiv>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={signup.fname}
                name="fname"
                placeholder="Full Name"
                onChange={onChange}
              />
            </S.InputWrapper>
            <S.MessageWrapper></S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={signup.email}
                name="email"
                placeholder="Email Address"
                onChange={onChange}
              />
            </S.InputWrapper>
            <S.MessageWrapper></S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="password"
                value={signup.password}
                name="password"
                placeholder="Password"
                onChange={onChange}
              />
            </S.InputWrapper>
            <S.MessageWrapper></S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="password"
                value={signup.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={onChange}
              />
            </S.InputWrapper>
            <S.MessageWrapper></S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.ButtonContainer>
            <T.Button type="button" onClick={onSubmit}>
              {isSigningUp ? <Spinner /> : "SignUp"}
            </T.Button>
          </S.ButtonContainer>
        </S.SignUpDiv>
      </S.Wrapper>
    </>
  );
};

export default Signup;
