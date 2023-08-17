import styled from "styled-components"
import { headerColor } from "../../constants/colors"
import { mainColor } from "../../constants/colors"
import { Link } from "react-router-dom"

export const PagesContainer = styled.main`
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`

export const AuthContainer = styled.section`
  min-height: calc(100vh - 100px); /* Altura total menos a altura do cabeçalho */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  margin-top: 100px; /* Altura do cabeçalho */
  background-color: ${mainColor};
`;

export const HeaderAuth = styled.div`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  height: 175px;
  background-color: ${headerColor};
  h1{
    color: #FFF;
    font-family: Passion One;
    font-size: 76px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 3.8px;
  }
  h3{
      color: #FFF;
      text-align: center;
      font-family: Oswald;
      font-size: 23px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
`;

export const InputAuth = styled.input`
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  width: 330px;
  height: 30px;
  flex-shrink: 0;
  padding: 15px;
  margin: 1px;
  border: none;
  :focus {
    border: 2px solid #ffb6b6;
    margin: 0px;
  }
`;

export const ButtonAuth = styled.button `
  width: 330px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #1877F2;

  color: #FFF;
  font-family: Oswald;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  padding: 12px;
`

export const AuthLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  font-weight: bold;
  transition: color 0.3s;
  color: #FFF;
  font-family: Lato;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  &:hover {
    color: #ffb6b6;
  }
`;
