import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../Shared/Elements/Button";
import * as S from "./LoginStyles";
import * as T from "../../Shared/Elements/CustomTags";
import * as M from "../../Shared/constants/Status";
import * as R from "../../Shared/Variables/routes";
import Spinner from "../../Shared/Elements/Spinner";
import * as SC from "../../Shared/constants/StatusCode";

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
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<String>("");

  useEffect(() => {
    async function autoLogin() {
      const response = await fetch(R.AUTOLOGIN, {
        method: M.GET,
        credentials: "include",
      });

      if (response.status === SC.OK) {
        navigate("/dashboard");
      }
    }
    autoLogin();
  });

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    setEmailError(false);
    setPasswordEmpty(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (login.email.trim().length === 0) {
      setEmailError(true);
      setMessage("Email Id Required");
      return;
    }

    if (login.password.trim().length === 0) {
      setPasswordEmpty(true);
      setMessage("Password Required");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(R.LOGIN, {
        method: M.POST,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: login.email,
          password: login.password,
        }),
      });
      setTimeout(() => setIsLoading(false), 800);
      if (response.status === 200) {
        setMessage("Login Successful");
        setIsLoginSuccess(true);
        setTimeout(() => {
          setIsLoginSuccess(false);
          navigate("/dashboard");
        }, 1050);
      } else {
        //TODO: Add alert box here to display that Credentials are wrong.
        setMessage("Login Failed. Try Again");
        setIsLoginFailed(true);
        setTimeout(() => {
          setIsLoginFailed(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Description>
        <T.H1>Expense Manager</T.H1>
        <T.UL>
          <T.ListItem>Expenses</T.ListItem>
          <T.ListItem>Investments</T.ListItem>
          <T.ListItem>Loans</T.ListItem>
        </T.UL>
        <T.H3>Manage all in One Place!</T.H3>
      </S.Description>
      <S.Wrapper>
        <S.TitleDiv>Expense Manager</S.TitleDiv>
        <S.LoginDiv>
          <S.Input
            name="email"
            type="text"
            placeholder="Email Address"
            value={login.email}
            onChange={handleChange}
            border={emailError}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            border={passwordEmpty}
          />
          <S.ButtonContainer>
            <Button type="button" onClick={onSubmit}>
              {isLoading ? <Spinner /> : "Login"}
            </Button>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </S.ButtonContainer>
          <S.MessageWrapper>
            {(emailError || passwordEmpty) && (
              <T.Message isError={true}>{message}</T.Message>
            )}
            {isLoginSuccess && <T.Message isError={false}>{message}</T.Message>}
            {isLoginFailed && <T.Message isError={true}>{message}</T.Message>}
          </S.MessageWrapper>
        </S.LoginDiv>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
