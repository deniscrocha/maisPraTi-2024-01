import styled from "styled-components";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

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
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;
const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentComponent, setCurrentComponent] = useState(null);
  const navigate = useNavigate();

  const handleReturn = () => {
    setCurrentComponent(null);
  };

  return (
    <MainContent>
      {currentComponent ? (
        <>
          {renderComponent()}
          <ReturnButton onClick={handleReturn}>
            <FaArrowLeft /> Return
          </ReturnButton>
        </>
      ) : (
        <CarouselContainer>
          <CustomCarousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            selectedItem={carouselIndex}
            onChange={(index) => setCarouselIndex(index)}
          >
            <CarouselItem>
              <h2>QR Code Generator</h2>
              <button onClick={() => navigate("/QRCode")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>IP Address Finder</h2>
              <button onClick={() => navigate("/IPAddressFinder")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Movie Search Engine</h2>
              <button onClick={() => navigate("/MovieSearch")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Todo App</h2>
              <button onClick={() => navigate("/TodoApp")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Quiz App</h2>
              <button onClick={() => navigate("/QuizApp")}>
                Acessar
              </button>
            </CarouselItem>
            <CarouselItem>
              <h2>Language Translator</h2>
              <button onClick={() => navigate("/LanguageTranslator")}>
                Acessar
              </button>
            </CarouselItem>
          </CustomCarousel>
        </CarouselContainer>
      )}
    </MainContent>
  );
}
