function AuthenticationUsingForm() {
  return (
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
  );
}

export default AuthenticationUsingForm;
