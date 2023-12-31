import AuthenticationUsingForm from "./AuthenticationUsingForm";
function Register() {
  return (
    <AuthenticationUsingForm
      title="Регистрация"
      buttonText="Зарегистрироваться"
      link={
        <a className="register__link" href="#">
          Уже зарегистрированы? Войти
        </a>
      }
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

export default Register;
