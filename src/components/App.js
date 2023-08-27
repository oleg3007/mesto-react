import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import PopupAvatar from "./PopupAvatar";
import PopupProfile from "./PopupProfile";
import PopupPlace from "./PopupPlace";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          name="avatar"
          title="Обновить Аватар"
          isOpen={true}
          onClose={closeAllPopups}
          children={<PopupAvatar />}
        />
      )}
      {isEditProfilePopupOpen && (
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={true}
          onClose={closeAllPopups}
          children={<PopupProfile />}
        />
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={true}
          onClose={closeAllPopups}
          children={<PopupPlace />}
        />
      )}

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
