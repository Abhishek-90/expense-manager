import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Navbar.styled";
import * as M from "../../Shared/constants/Status";
import * as E from "../../Shared/Variables/routes";
import { CustomLink } from "../../Shared/Elements/CustomTags";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleLogout = async () => {
    const response = await fetch(E.LOGOUT, {
      method: M.GET,
      credentials: "include",
    });
    if (response.status === 200) {
      navigate("/");
    }
  };

  return (
    <S.CustomNavbar>
      <S.MenuTitleWrap>
        <S.CustomMenuBtn onClick={() => setShowMenu(true)} />
        <S.TitleWrap>
          <S.Title href="/dashboard/*">Expense Manager</S.Title>
        </S.TitleWrap>
      </S.MenuTitleWrap>
      <S.CustomMenu isMenuOpen={showMenu}>
        <S.CustomClose onClick={() => setShowMenu(false)} />
        <ul>
          <CustomLink to="/dashboard" onClick={() => setShowMenu(false)}>
            <li>DashBoard</li>
          </CustomLink>
          <CustomLink
            to="/dashboard/visuals"
            onClick={() => setShowMenu(false)}
          >
            <li>Visuals</li>
          </CustomLink>
          <CustomLink to="/dashboard/loans" onClick={() => setShowMenu(false)}>
            <li>Loans</li>
          </CustomLink>
          <CustomLink
            to="/dashboard/investments"
            onClick={() => setShowMenu(false)}
          >
            <li>Investments</li>
          </CustomLink>
        </ul>
      </S.CustomMenu>
      <S.LogoutBtnWrap>
        <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
      </S.LogoutBtnWrap>
    </S.CustomNavbar>
  );
};

export default Navbar;
