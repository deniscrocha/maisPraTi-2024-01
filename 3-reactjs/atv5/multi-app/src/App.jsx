// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import styled from "styled-components";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
import QRCodeGenerator from "./modules/qrCode/QRCodeGenarator";
import IPAddressFinder from "./modules/ipAddress/IPAddressFinder";
import MovieSearchEngine from "./modules/movieSearch/MovieSearchEngine";
import TodoApp from "./modules/toDo/TodoApp";
import QuizApp from "./modules/quizApp/QuizApp";
import LanguageTranslator from "./modules/languageTranslator/LanguageTranslator";
import Login from "./modules/login/Login";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./modules/footer/Footer";
import VerticalBar from "./modules/verticalBar/VerticalBar";
import Home from "./modules/home/Home";

const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;
// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const App = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qrcode-generator");
  };

  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <VerticalBar />
          <Home />
          <Footer />
        </>
      )}
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
