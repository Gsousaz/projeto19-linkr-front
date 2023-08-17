import { Link } from "react-router-dom"
import useQuickIn from "../../hooks/useQuickIn"
import useForm from "../../hooks/useForm"
import { useSignUp } from "../../services/auth"
import { SingUpContainer } from "./styled"
import { AuthContainer, HeaderAuth, InputAuth, ButtonAuth, AuthLink } from "../LoginPage/styled"

export default function SignUpPage() {
  const { form, handleForm } = useForm({ name: "", email: "", password: "", confirmPassword: "" })
  useQuickIn()
  const signUp = useSignUp()

  function submitForm(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return alert("As senhas não coincidem!")

    delete form.confirmPassword
    signUp(form)
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
      <form onSubmit={submitForm}>
        
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
        <InputAuth
          required
          placeholder="username"
          name="username"
          value={form.name}
          onChange={handleForm}
        />
        <InputAuth
          required
          minLength={3}
          type="password"
          autoComplete="new-password"
          placeholder="picture url"
          name="picture"
          value={form.confirmPassword}
          onChange={handleForm}
        />
        <ButtonAuth type="submit">Cadastrar</ButtonAuth>
      </form>

      <AuthLink to="/">
      Switch back to log in!
      </AuthLink>
    </AuthContainer>
  )
}