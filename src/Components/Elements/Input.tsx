import styled from "styled-components";
import * as colors from "../../constants/themeConstants"
interface IInputProps {
  type?:string,
  placeholder:string,
  value?:string,
  handleChange:Function,
  name:string,
  border?:boolean,
}

const Input = styled.input<{border:boolean}>`
  height: 2.5rem;
  width: 20rem;
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

export const CustomInput = ({type = "text",placeholder,value,handleChange,name, border}:IInputProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
      name={name}
      border={border ?? false}
    />    
  )
}
