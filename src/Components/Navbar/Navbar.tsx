import { Container, CustomNavbar, CustomLink } from "./NavbarStyled";

const Navbar = () => {    
  return (
    <Container>
      <CustomNavbar>
        <CustomLink to="/dashboard/*">Dashboard</CustomLink>
        <CustomLink to="/dashboard/loans">Loans</CustomLink>
        <CustomLink to="/dashboard/investment">Investments</CustomLink>
        <CustomLink to="/dashboard/visuals">Visuals</CustomLink>
      </CustomNavbar>
    </Container>
  );
};

export default Navbar;
