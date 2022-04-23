import styled from "styled-components";

interface IInputProps {
  type?:string,
  width?:number
}

const Input = styled.input`
  height: 2.5rem;
  width: ${props => props.width ?? '20rem'};
  padding: 0.6rem;
  border:none;
  outline:none;
  font-size: 0.9rem; 
`

export const CustomInput = ({type = "text",width}:IInputProps) => {
  return (
    <Input
      type={type}
    />    
  )
}
