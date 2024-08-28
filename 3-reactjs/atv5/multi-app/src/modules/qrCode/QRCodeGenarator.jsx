import { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: #fff; // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil ao redor do componente.
  max-width: 400px; // Define a largura máxima como 400px.
  margin: 50px auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;
const Title = styled.h2`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;
const Input = styled.input`
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do input.
  padding: 12px; // Adiciona padding de 12px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 100%; // Define a largura como 100% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s; // Adiciona uma transição suave de 0.3 segundos para a cor da borda.

  &:focus { // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;
const QRCodeContainer = styled.div`
  margin-top: 20px; // Adiciona uma margem de 20px acima do QRCodeContainer.
  padding: 20px; // Adiciona padding de 20px dentro do contêiner.
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 10px; // Adiciona bordas arredondadas de 10px.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do contêiner.
`;
const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  return (
    <Container>
      <Title>QR Code Generator</Title>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode"
      />
      {text && (
        <QRCodeContainer>
          <QRCode value={text} size={256} />
        </QRCodeContainer>
      )}
    </Container>
  );
};

export default QRCodeGenerator;
