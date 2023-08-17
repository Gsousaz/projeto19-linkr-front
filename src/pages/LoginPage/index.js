import useForm from "../../hooks/useForm"
import useAuth from "../../hooks/useAuth"
import { AuthContainer, HeaderAuth, InputAuth, ButtonAuth, AuthLink } from "./styled"
import apis from "../../services/apis"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" }); // Usando a tupla completa
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function loginUser(e) {
    e.preventDefault()

    apis.singIn({ ...form })
      .then(res => {
        login(res.data)
        navigate('/home')
      })
      .catch(() => {
        alert('Erro, tente novamente');
      })
  }



  return (
    <AuthContainer>
      <HeaderAuth>
        <h1>linkr</h1>
        <h3>
          save, share and discover <br />
          the best links on the web
        </h3>
      </HeaderAuth>
      <form onSubmit={loginUser}>
        <InputAuth
          required
          type="email"
          autoComplete="username"
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <InputAuth
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <ButtonAuth type="submit">Log In</ButtonAuth>
      </form>

      <AuthLink to="/cadastro">
        First time? Create an account!
      </AuthLink>
    </AuthContainer>
  )
}