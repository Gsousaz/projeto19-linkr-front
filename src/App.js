import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
// import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import AuthContext from "./contexts/AuthContext"
import { useState } from "react"
// import mainColor from "./constants/colors"


export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userName, setUserName] = useState(localStorage.getItem("userName"))

  return (

      <AuthContext.Provider value={{ token, setToken, userName, setUserName }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            {/* <Route path="/home" element={<HomePage />} /> */}

          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>


  )
}


