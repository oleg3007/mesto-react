function Register() {
  return (
    <div className="register">
      <div className="register__conteiner">
        <h2 className="register__title">Регистрация</h2>
        <form>
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
          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <a className="register__link" href="#">
          Уже зарегистрированы? Войти
        </a>
      </div>
    </div>
  );
}
export default Register;
