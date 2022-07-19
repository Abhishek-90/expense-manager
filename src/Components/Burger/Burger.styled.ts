import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const StyledHamburger = styled(GiHamburgerMenu)`
  margin-left: 1rem;
  height: 1.4rem;
  width: 1.4rem;
  cursor: pointer;
`;

export const BurgerButton = styled.button`
  background: transparent;
  height: 100%;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline:none;
  border: none;
`;