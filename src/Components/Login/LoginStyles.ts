import styled from "styled-components";
import * as colors from "../../constants/themeConstants"

export const Container = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction: row;
  justify-content:center;
`

export const Description = styled.div`
  width: 40%;
  height: 100vh;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.blue};

  @media screen and (max-width: 700px) {
    display:none;
  }
`

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.white}
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  margin-top: 1.3rem;
  color: ${colors.white}
`

export const UL = styled.ul`
  color: ${colors.white};
  margin-top: 1.5rem;
`

export const ListItem = styled.li`
  color: ${colors.white};
  margin-right: 3.5rem;
  font-size: 1.4rem;
`

export const Wrapper = styled.div`
  width: 60%;
  height: 100vh;
  max-width: 60rem;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content: center;
  box-shadow: 4px 3px 80px rgba(97, 78, 152,0.24);

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const LoginDiv = styled.div`
  display:grid;
  grid-template-column: 1fr;
  justify-items:center;

  @media screen and (max-width: 700px) {
    justify-content:center;
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

export const TitleDiv = styled.div`
  @media screen and (min-width: 700px) {
    display:none;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    background: transparent;
    color: ${colors.blue};
    font-size: 1.7rem;
    font-weight: bolder;
    padding-left: 1.4rem;
  }
`
