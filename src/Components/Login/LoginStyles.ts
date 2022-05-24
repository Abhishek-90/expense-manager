import styled from "styled-components";
import * as colors from "../../constants/themeConstants"

export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: row;
  justify-content:center;

  @media screen and (max-width: 700px) {
    flex-direction:column;
  }
`

export const Description = styled.div`
  width: 50%;
  height: 100vh;
  max-width: 60rem;
  background: ${colors.blue};
  box-shadow: 4px 3px 80px rgba(97, 78, 152,0.24);

  @media screen and (max-width: 700px) {
    box-shadow: none;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  width: 50%;
  height: 100vh;
  max-width: 60rem;
  float:right;
  display: flex;
  justify-content:center;
  align-content: center;
  box-shadow: 4px 3px 80px rgba(97, 78, 152,0.24);

  @media screen and (max-width: 700px) {
    box-shadow: none;
    width: 100%;
  }
`

export const LoginDiv = styled.div`
  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;
`

export const ButtonContainer = styled.div`
  height: fit-content;
  width: 20rem;
  display: flex;
  justify-content: space-around;
  margin-top:2rem;
`
