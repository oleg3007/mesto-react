import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "../index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup popup-profile">
        <div className="popup__conteiner">
          <button className="popup__cros cros-popup" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="place" className="popup__form" method="post" noValidate>
            <div className="popup__form-input">
              <input
                className="popup__hield popup__hield_enter_name"
                type="text"
                name="name"
                placeholder="Имя"
                tabIndex="1"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__form-input-error popup__form-input-error_field_name"></span>
            </div>
            <div className="popup__form-input">
              <input
                className="popup__hield popup__hield_enter_about"
                type="text"
                name="about"
                placeholder="О себе"
                tabIndex="2"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__form-input-error popup__form-input-error_field_about"></span>
            </div>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup-item">
        <div className="popup__conteiner">
          <button
            className="popup__cros popup-item__cros cros-popup"
            type="button"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form name="place" className="popup__form" method="post" noValidate>
            <div className="popup__form-input">
              <input
                className="popup__hield popup__hield_enter_title"
                type="text"
                name="name"
                placeholder="Название"
                tabIndex="1"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__form-input-error popup__form-input-error_field_name"></span>
            </div>
            <div className="popup__form-input">
              <input
                className="popup__hield popup__hield_enter_link"
                type="URL"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__form-input-error popup__form-input-error_field_link"></span>
            </div>
            <button
              className="popup__button popup-item__button popup__button_disabled"
              type="submit"
              disabled
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup-image">
        <div className="popup-image__conteiner">
          <button
            className="cros-popup popup-image__cros"
            type="button"
          ></button>
          <img className="popup-image__foto" src="#" alt="" />
          <p className="popup-image__signature"></p>
        </div>
      </div>
      <div className="popup popup-removal">
        <div className="popup-removal__conteiner">
          <button className="popup__cros cros-popup" type="button"></button>
          <h2 className="popup__title popup-removal__title">Вы уверены?</h2>
          <button className="popup__button popup-removal__button" type="submit">
            Да
          </button>
        </div>
      </div>
      <div className="popup popup-avatar">
        <div className="popup-avatar__conteiner">
          <button
            className="popup__cros popup-avatar__cros cros-popup"
            type="button"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="avatar" className="popup__form" method="post" noValidate>
            <div className="popup__form-input">
              <input
                className="popup__hield popup__hield_enter_link"
                type="URL"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__form-input-error popup__form-input-error_field_avatar"></span>
            </div>
            <button
              className="popup__button popup-avatar__button popup__button_disabled"
              type="submit"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="event-card" className="event-card">
        <article className="element">
          <div className="element__trash"></div>
          {/* <img className="element__mask-group" src="#" alt=""> */}
          <h2 className="element__title"></h2>
          <div className="element__like">
            <button className="element__group" type="button"></button>
            <p className="element__numbers-like">0</p>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
