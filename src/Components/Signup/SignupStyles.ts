import styled from "styled-components";
import * as colors from "../../Shared/constants/themeConstants"

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 3px 80px rgba(97, 78, 152, 0.24);

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100vh;
  }
`;

export const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: orange;

  @media screen and (max-width: 700px) {
    justify-items: center;
    align-items: center;
    heigth: 100vh;
    width: 100vw;
  }
`;

export const ButtonContainer = styled.div`
  height: fit-content;
  width: 20rem;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media screen and (max-width: 700px) {
    width: 75%;
    display: flex;
    justify-content: space-around;
  }
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  padding: 0.6rem;
  outline:none;
  font-size: 0.9rem; 
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  margin-top: 2.4rem;
  border: none;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`
