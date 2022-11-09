import { useState } from "react";
import { useNavigate } from "react-router";
import Spinner from "../../Shared/Elements/Spinner";
import { Button } from "../../Shared/Elements/Button";
import * as S from "./SignupStyles";
import * as R from "../../Shared/Variables/routes";
import * as method from "../../Shared/constants/Status";
import * as SC from "../../Shared/constants/StatusCode";
import * as T from "../../Shared/Elements/CustomTags";

interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ISignupFormError {
  name: boolean;
  email: boolean;
  password: boolean;
}

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState<ISignUp>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [errors, setErrors] = useState<ISignupFormError>({
    name: false,
    email: false,
    password: false,
  });
  const [message, setMessage] = useState<String>("");

  const onChange = (e: any) => {
    setSignup({ ...signup, [e?.target?.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (signup.name.trim().length === 0) {
      setErrors({ ...errors, name: true });
      setMessage("*Name Required");
      return;
    }

    if (signup.email.trim().length === 0) {
      setErrors({ ...errors, email: true });
      setMessage("*Email Required");
      return;
    }

    if (signup.password.trim().length === 0) {
      setErrors({ ...errors, password: true });
      setMessage("*Password Required");
      return;
    }

    if (signup.password.trim().length < 8) {
      setErrors({ ...errors, password: true });
      setMessage("*Minimum password length is 8");
      return;
    }

    if (signup.password !== signup.confirmPassword) {
      setErrors({ ...errors, password: true });
      setMessage("Passwords must Match");
      return;
    }

    try {
      setIsSigningUp(true);
      const response = await fetch(R.SINGUP, {
        method: method.POST,
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: signup.name,
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
                value={signup.name}
                name="name"
                placeholder="Full Name"
                onChange={onChange}
              />
            </S.InputWrapper>
            <S.MessageWrapper>
              {errors.name && (
                <T.Message isError={true}>{message}</T.Message>
              )}
            </S.MessageWrapper>
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
            <S.MessageWrapper>
              {errors.email && (
                <T.Message isError={true}>{message}</T.Message>
              )}
            </S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="password"
                value={signup.password}
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  onChange(e);
                  setErrors({ ...errors, password: false });
                }}
              />
            </S.InputWrapper>
            <S.MessageWrapper>
              {errors.password && (
                <T.Message isError={true}>{message}</T.Message>
              )}
            </S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.InputWrapperOutter>
            <S.InputWrapper>
              <S.Input
                type="password"
                value={signup.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => {
                  onChange(e);
                  setErrors({ ...errors, password: false });
                }}
              />
            </S.InputWrapper>
            <S.MessageWrapper>
              {errors.password && (
                <T.Message isError={true}>{message}</T.Message>
              )}
            </S.MessageWrapper>
          </S.InputWrapperOutter>
          <S.ButtonContainer>
            <Button type="button" onClick={onSubmit}>
              {isSigningUp ? <Spinner /> : "SignUp"}
            </Button>
          </S.ButtonContainer>
        </S.SignUpDiv>
      </S.Wrapper>
    </>
  );
};

export default Signup;
