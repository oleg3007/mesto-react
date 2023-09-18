import AuthenticationUsingForm from "./AuthenticationUsingForm";

function Login() {
  return (
    <AuthenticationUsingForm
      title="Вход"
      buttonText="Войти"
      children={
        <>
          <input
            className="register__form-input"
            type="email"
            placeholder="Email"
          ></input>
          <input
            className="register__form-input"
            type="password"
            placeholder="Пароль"
          ></input>
        </>
      }
    />
  );
}

export default Login;
