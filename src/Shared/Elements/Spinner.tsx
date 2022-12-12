import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={require("../Media/Spinner.gif")} alt="Loading ..." />
    </SpinnerContainer>
  );
};

export default Spinner;
