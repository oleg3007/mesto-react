import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import PopupAvatar from "./PopupAvatar";
import PopupProfile from "./PopupProfile";
import PopupPlace from "./PopupPlace";
import ImagePopup from "./ImagePopup";

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

  const [selectedCard, setSelectedCard] = useState(false);
  function handleCardClick(res) {
    setSelectedCard(res);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {isEditAvatarPopupOpen && (
        <PopupWithForm
          name="avatar"
          title="Обновить Аватар"
          isOpen={true}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
          children={<PopupAvatar />}
        />
      )}
      {isEditProfilePopupOpen && (
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={true}
          onClose={closeAllPopups}
          buttonText={"Сохранить"}
          children={<PopupProfile />}
        />
      )}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={true}
          onClose={closeAllPopups}
          buttonText={"Создать"}
          children={<PopupPlace />}
        />
      )}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <div className="popup popup-removal">
        <div className="popup-removal__conteiner">
          <button className="popup__cros cros-popup" type="button"></button>
          <h2 className="popup__title popup-removal__title">Вы уверены?</h2>
          <button className="popup__button popup-removal__button" type="submit">
            Да
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
