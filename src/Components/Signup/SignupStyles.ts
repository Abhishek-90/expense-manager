import styled from "styled-components";

export const Wrapper = styled.div`
  width: 75%;
  height: 100vh;
  max-width: 60rem;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  box-shadow: 4px 3px 80px rgba(97, 78, 152,0.24);

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100vh;
  }
`

export const SignUpDiv = styled.div`
  width: 35rem;
  heigth: 100vh;
  display: grid;
  grid-template-column: 1fr;
  justify-content:center;

  @media screen and (max-width: 700px) {
    justify-items: center;
    heigth: 100vh;
    width: 100vw;
  }
`

export const ButtonContainer = styled.div`
  height: fit-content;
  width: 20rem;
  display: flex;
  justify-content: space-around;
  margin-top:2rem;

  @media screen and (max-width: 700px) {
    width: 75%;
    display: flex;
    justify-content: space-around;
  }
`