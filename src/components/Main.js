import imagePen from "../images/SVG/Перо.svg";
import imageCross from "../images/SVG/Крест.svg";
import App from "./App";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup-avatar").classList.add("popup_active");
  }
  function handleEditProfileClick() {
    document.querySelector(".popup-profile").classList.add("popup_active");
  }
  function handleAddPlaceClick() {
    document.querySelector(".popup-item").classList.add("popup_active");
  }
  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__avatar-button"
          onClick={handleEditAvatarClick}
        >
          <img className="profile__avatar" src="#" alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">Жак-Ив-Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={handleEditProfileClick}
            >
              <img className="profile__img-pen" src={imagePen} alt="Ручка" />
            </button>
          </div>
          <p className="profile__text">Иследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={handleAddPlaceClick}
        >
          <img className="profile__img-cross" src={imageCross} alt="Крест" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
