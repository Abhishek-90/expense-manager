import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../Shared/Elements/Button";
import {
  Description,
  Wrapper,
  TitleDiv,
  LoginDiv,
  ButtonContainer,
  Container,
  Input,
} from "./LoginStyles";
import { H1, UL, ListItem, H3 } from "../../Shared/Elements/CustomTags";
import * as method from "../../Shared/constants/Status";
import * as E from "../../Shared/Variables/routes";
import Spinner from "../../Shared/Elements/Spinner";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (login.email.trim().length > 0 && login.password.trim().length > 0) {
      setEmailEmpty(false);
      setPasswordEmpty(false);
      try {
        setIsLoading(true);
        const response = await fetch(E.LOGIN, {
          method: method.POST,
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: login.email,
            password: login.password,
          }),
        });
        setTimeout(() => setIsLoading(false), 1000);
        if (response.status === 200) {
          setTimeout(() => navigate("/dashboard"), 1500);
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
            <Input
              name="email"
              type="text"
              placeholder="Email Address"
              value={login.email}
              onChange={handleChange}
              border={emailEmpty}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
              border={passwordEmpty}
            />
            <ButtonContainer>
              <Button type="submit" onClick={onSubmit}>
                {isLoading ? <Spinner/> : "Login"}
              </Button>
              <Link to="/signup">
                <Button>SignUp</Button>
              </Link>
            </ButtonContainer>
          </LoginDiv>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;
