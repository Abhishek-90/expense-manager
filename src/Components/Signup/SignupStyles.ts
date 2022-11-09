import styled from "styled-components";
import * as colors from "../../Shared/constants/themeConstants";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpDiv = styled.div`
  width: 70%;
  height: 18rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 28rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 75%;
    display: flex;
    justify-content: space-around;
  }
`;

export const InputWrapperOutter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
`;

export const Input = styled.input`
  height: 2.5rem;
  width: 80%;
  padding: 0.6rem;
  outline: none;
  font-size: 0.9rem;
  box-shadow: ${colors.shadowBlue} 0px 3px 8px;
  border: none;
`;
