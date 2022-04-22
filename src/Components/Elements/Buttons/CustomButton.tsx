import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ICustomButton {
  text:string,
  type?:"button" | "submit" | "reset",
  onClick:MouseEventHandler
}

const Button = styled.button`
  width: 8rem;
  height: 3rem;
  background: rgb(117, 175, 250);
  color: white;
  border:none;
  outline:none;
  border-radius:4rem;
  font-size: 1.1rem;
  letter-spacing:0.09rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const CustomButton = ({text, type,onClick}:ICustomButton) => {
  return (
    <Button
      type={type}
      onClick={onClick}
    >{text}</Button>
  )
}