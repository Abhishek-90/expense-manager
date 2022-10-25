import styled from "styled-components";

const SpinnerContainer = styled.div`
  height: 100%;
  margin: 0;
  padding:0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={require('../Media/Spinner.gif')} alt='Loading ...'/>
    </SpinnerContainer>
  )
}

export default Spinner;
