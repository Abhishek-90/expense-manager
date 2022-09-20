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
import { CustomLink } from "../Elements/CustomTags";

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
          <CustomLink to="/dashboard"><li>DashBoard</li></CustomLink>
          <CustomLink to="/dashboard/visuals"><li>Visuals</li></CustomLink>
          <CustomLink to="/dashboard/loans"><li>Loans</li></CustomLink>
          <CustomLink to="/dashboard/investments"><li>Investments</li></CustomLink>
        </ul>
      </CustomMenu>
      <LogoutBtnWrap>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </LogoutBtnWrap>
    </CustomNavbar>
  );
};

export default Navbar;
