import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CustomMenu,
  CustomMenuBtn,
  CustomNavbar,
  LogoutBtnWrap,
  LogoutButton,
  MenuTitleWrap,
  Title,
  TitleWrap,
  CustomClose,
} from "./Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <CustomNavbar>
      <MenuTitleWrap>
        <CustomMenuBtn onClick={() => setShowMenu(true)} />
        <TitleWrap>
          <Title href="/dashboard/*">Expense Manager</Title>
        </TitleWrap>
      </MenuTitleWrap>
      <CustomMenu isMenuOpen={showMenu}>
          <CustomClose onClick={() => setShowMenu(false)} />
        <ul>
          <li>DashBoard</li>
          <li>Visuals</li>
          <li>Loans</li>
          <li>Investments</li>
        </ul>
      </CustomMenu>
      <LogoutBtnWrap>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </LogoutBtnWrap>
    </CustomNavbar>
  );
};

export default Navbar;
