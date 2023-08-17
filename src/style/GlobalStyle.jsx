import { createGlobalStyle } from "styled-components";
import { mainColor } from "../constants/colors";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
    * {
        font-family: Oswald, sans-serif; 
        font-style: normal;
        font-weight: 400;
    }

    h1 {
        font-weight: 700;
        font-size: 26px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        background-color: ${mainColor};
        border-radius: 6px;
        padding: 22px;

    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
    }
`

export default GlobalStyle