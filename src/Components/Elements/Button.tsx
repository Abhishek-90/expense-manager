import { MouseEventHandler } from "react";
import styled from "styled-components";
import * as colors from '../../constants/themeConstants'
interface ICustomButton {
  text:string,
  type?:"button" | "submit" | "reset",
  onClick?:MouseEventHandler
}

const Button = styled.button`
  width: 8rem;
  height: 2.7rem;
  background: ${colors.blue};
  color: white;
  border:none;
  outline:none;
  border-radius:4rem;
  font-size: 1rem;
  letter-spacing:0.09rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 700px) {
    width: 5.5rem;
    height: 2.3rem;
  }
`

export const CustomButton = ({text, type,onClick}:ICustomButton) => {
  return (
    <Button
      type={type}
      onClick={onClick}
    >{text}</Button>
  )
}