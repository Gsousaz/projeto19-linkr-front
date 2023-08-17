
import useQuickIn from "../../hooks/useQuickIn"
import useForm from "../../hooks/useForm"
import { useLogin } from "../../services/auth"
import { AuthContainer, HeaderAuth, InputAuth, ButtonAuth, AuthLink } from "./styled"


export default function LoginPage() {
  const { form, handleForm } = useForm({ email: "", password: "" })
  const login = useLogin()
  useQuickIn()

  function submitForm(e) {
    e.preventDefault()
    login(form)
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
        <ButtonAuth type="submit">Log In</ButtonAuth>
      </form>

      <AuthLink to="/cadastro">
      First time? Create an account!
      </AuthLink>
    </AuthContainer>
  )
}