import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
} from "react-icons/fa";
import { useContext } from "react";
import isAuthenticate from "../../contexts/isAuthenticate";

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
    top: 0;
    left: 0;
    right: 0;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;
export default function VerticalBar() {
  const auth = useContext(isAuthenticate);
  return (
    <NavBar>
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
      <button
        onClick={() => auth.handleAuth()}
        style={{
          marginTop: "20px",
          color: "white",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        Logout
      </button>
    </NavBar>
  );
}
