function AuthenticationUsingForm(props) {
  return (
    <div className="register">
      <div className="register__conteiner">
        <h2 className="register__title">{props.title}</h2>
        <form>
          {props.children}
          <button className="register__button" type="submit">
            {props.buttonText}
          </button>
          {props.link}
        </form>
      </div>
    </div>
  );
}

export default AuthenticationUsingForm;
