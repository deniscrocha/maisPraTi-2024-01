import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
} from "react-icons/fa";
import { useContext, useState } from "react";
import isAuthenticate from "../../contexts/isAuthenticate";
import { logout } from "../../services/AuthService";

const NavBar = styled.div`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;
const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
  filter: invert(${({ isOpen }) => (isOpen ? "100%" : "0%")});
  @media (max-width: 768px) {
    display: block;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;
const LogoutButton = styled.button`
  margintop: 20px;
  color: white;
  background: transparent;
  border: none;
  &:hover{
    background: transparent;
  }
  @media (max-width: 768px) {
    display: block;
    width: 90%;
  }
`;

export default function VerticalBar() {
  const auth = useContext(isAuthenticate);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(isOpen ? false : true);
  };
  const handleLogout = () => {
    auth.handleAuth();
    logout();
  };
  return (
    <>
      <NavBarToggle isOpen={isOpen} onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      <NavBar isOpen={isOpen}>
        <StyledLink to="/QRCode">
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink to="/IPAddressFinder">
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink to="/MovieSearch">
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink to="/TodoApp">
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink to="/QuizApp">
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink to="/LanguageTranslator">
          <FaGlobeAmericas />
          Translator
        </StyledLink>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </NavBar>
    </>
  );
}
