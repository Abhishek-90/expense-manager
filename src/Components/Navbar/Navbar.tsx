import { Container, CustomNavbar, CustomLink } from "./NavbarStyled";

const Navbar = () => {    
  return (
    <Container>
      <CustomNavbar>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/loans">Loans</CustomLink>
        <CustomLink to="/investment">Investments</CustomLink>
      </CustomNavbar>
    </Container>
  );
};

export default Navbar;
