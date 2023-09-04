import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import PopupAvatar from "./PopupAvatar";
import PopupProfile from "./PopupProfile";
import PopupPlace from "./PopupPlace";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getServerCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.error(`Ошибка отображения карточек ${error}`));
  }, []);

  useEffect(() => {
    api
      .getServerUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => console.error(`Ошибка оформлении профиля ${error}`));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(res) {
    setSelectedCard(res);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
        />
        <Footer />
        {
          <PopupWithForm
            name="avatar"
            title="Обновить Аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={<PopupAvatar />}
          />
        }
        {
          <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={<PopupProfile />}
          />
        }
        {
          <PopupWithForm
            name="place"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText={"Создать"}
            children={<PopupPlace />}
          />
        }
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
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
