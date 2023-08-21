import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profile_image, setprofile_image] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      !email.trim() ||
      !password.trim() ||
      !username.trim() ||
      !profile_image.trim()
    ) {
      alert("Por favor, preencha todos os campos.");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DATABASE_URL}/sign-up`,
        {
          email,
          password,
          username,
          profile_image,
        }
      );

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user);
        navigate("/");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert(error.response ? error.response.data : error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Description>
        <Logo>linkr</Logo>
        <Slogan>save, share and discover the best links on the web</Slogan>
      </Description>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <StyledInput
          type="text"
          placeholder="picture url"
          value={profile_image}
          onChange={(e) => setprofile_image(e.target.value)}
        />
        <SignupButton type="submit" disabled={isSubmitting}>
          Sign Up
        </SignupButton>
        <SignInLink href="/">Switch back to log in</SignInLink>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Description = styled.div`
  width: 60vw;
  height: 100vh;
  background: #151515;
  display: flex;
  flex-direction: column;
  padding: 150px 10px 10px 100px;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  font-family: Passion One;
  font-size: 106px;
  font-weight: 700;
  line-height: 117px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffffff;
`;

const Slogan = styled.h2`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  overflow: hidden;
`;

const Form = styled.form`
  width: 40vw;
  height: 100vh;
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  width: 70%;
  height: 65px;
  background: #ffffff;
  color: #9f9f9f;
  border-radius: 6px;
  margin-bottom: 13px;
  padding: 10px 15px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9f9f9f;
  }
`;

const SignupButton = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;
  width: 70%;
  height: 65px;
  background-color: #1877f2;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: darkblue;
  }
`;

const SignInLink = styled.a`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  display: block;
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
`;
