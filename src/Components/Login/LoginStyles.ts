import styled from "styled-components";
import * as colors from "../../Shared/constants/themeConstants";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Description = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.blue};
  color: ${colors.white};

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  height: fit-content;
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media screen and (max-width: 700px) {
    width: 75%;
    display: flex;
    justify-content: space-around;
  }
`;

export const TitleDiv = styled.div`
  @media screen and (min-width: 700px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    background: transparent;
    color: ${colors.blue};
    font-size: 1.7rem;
    font-weight: bolder;
    padding-left: 1.4rem;
    margin-left: 2.2rem;
  }
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Input = styled.input<{border?:boolean}>`
  height: 2.5rem;
  width: 40%;
  padding: 0.6rem;
  border: ${props => props.border ? '0.07rem solid red':'none'};
  outline:none;
  font-size: 0.9rem; 
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  margin-top: 2.4rem;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`
