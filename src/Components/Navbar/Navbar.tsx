import { useNavigate } from "react-router-dom";
import {
  CustomMenu,
  CustomNavbar,
  LogoutBtnWrap,
  LogoutButton,
  MenuTitleWrap,
  Title,
  TitleWrap,
} from "./Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <CustomNavbar>
      <MenuTitleWrap>
        <CustomMenu />
        <TitleWrap>
            <Title href="/">Expense Manager</Title>
        </TitleWrap>
      </MenuTitleWrap>
      <LogoutBtnWrap>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </LogoutBtnWrap>
    </CustomNavbar>
  );
};

export default Navbar;
