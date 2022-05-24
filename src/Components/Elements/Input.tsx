import styled from "styled-components";

interface IInputProps {
  type?:string,
  placeholder:string,
  value?:string,
  handleChange:Function,
  name:string
}

const Input = styled.input`
  height: 2.5rem;
  width: 20rem;
  padding: 0.6rem;
  border:none;
  outline:none;
  font-size: 0.9rem; 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 2.4rem;
`

export const CustomInput = ({type = "text",placeholder,value,handleChange,name}:IInputProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e)}
      name={name}
    />    
  )
}
