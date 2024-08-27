// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import { Route, Routes, Router, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
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
import isAuthenticate from "./contexts/isAuthenticate";
import Auth from "./modules/auth/Auth";

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
  const navigate = useNavigate();
  const handleAuth = () => {
    setIsAuthenticated(isAuthenticated ? false : true);
  };
  useEffect(()=>{
    isAuthenticated ? navigate("/") : navigate("/Login"); 
  }, [isAuthenticated])
  return (
    <isAuthenticate.Provider value={{ isAuthenticated, handleAuth }}>
      <AppContainer>
        {isAuthenticated ? <VerticalBar /> : ""}
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/QRCode"
            element={
              <Auth>
                <QRCodeGenerator />
              </Auth>
            }
          />
          <Route
            path="/IPAddressFinder"
            element={
              <Auth>
                <IPAddressFinder />
              </Auth>
            }
          />
          <Route
            path="/TodoApp"
            element={
              <Auth>
                <TodoApp />
              </Auth>
            }
          />
          <Route
            path="/QuizApp"
            element={
              <Auth>
                <QuizApp />
              </Auth>
            }
          />
          <Route
            path="/LanguageTranslator"
            element={
              <Auth>
                <LanguageTranslator />
              </Auth>
            }
          />
          <Route path="/Login" Component={Login} />
        </Routes>
        {isAuthenticated ? <Footer /> : ""}
      </AppContainer>
    </isAuthenticate.Provider>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
