import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
