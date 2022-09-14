import styled from "styled-components";
import * as colors from "../../constants/themeConstants";

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
