import { Link, useNavigate } from "react-router-dom";
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
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
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
  const navigate = useNavigate();
  const auth = useContext(isAuthenticate);
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <NavBar isOpen={true}>
      <StyledLink onClick={() => navigate("/QRCode")}>
        <FaQrcode />
        QR Code Generator
      </StyledLink>
      <StyledLink onClick={() => navigate("/IPAddressFinder")}>
        <FaNetworkWired />
        IP Address Finder
      </StyledLink>
      <StyledLink onClick={() => navigate("/MovieSearch")}>
        <FaSearch />
        Movie Search
      </StyledLink>
      <StyledLink onClick={() => navigate("/TodoApp")}>
        <FaTasks />
        Todo App
      </StyledLink>
      <StyledLink onClick={() => navigate("/QuizApp")}>
        <FaRegQuestionCircle />
        Quiz App
      </StyledLink>
      <StyledLink onClick={() => navigate("/LanguageTranslator")}>
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
