import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
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
  const [textButton, setTextButton] = useState(false);

  // Постановка и удаление лайков
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .putLikeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.error(`Ошибка постановки лайка ${error}`));
    } else {
      api
        .deleteLikeCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.error(`Ошибка удаления лайка ${error}`));
    }
  }
  // Удаление карточки
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.error(`Ошибка удаления карточки ${error}`));
  }
  // Создание новых карточек
  function handleAddPlaceSubmit({ nameCard, link }) {
    setTextButton(true);
    api
      .sendCard({ nameCard, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((error) =>
        console.error(`Ошибка отображения карточек пользователя ${error}`)
      );
  }
  // Загрузка карточек на страницу
  useEffect(() => {
    api
      .getServerCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.error(`Ошибка отображения карточек ${error}`));
  }, []);
  // Отправка на сервер запроса PATH о данных пользователя
  function handleUpdateUser({ dataName, about }) {
    setTextButton(true);
    api
      .patchToSentProfile({ dataName, about })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.error(`Ошибка отображения профиля пользователя ${error}`)
      );
  }
  // Отправка на сервер запроса PATH о аватаре пользователя
  function handleUpdateAvatar({ avatar }) {
    setTextButton(true);
    api
      .patchToSentAvatar({ avatar })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) =>
        console.error(`Ошибка отображения аватара пользователя ${error}`)
      );
  }
  // Загрузка данных о пользвателе
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
    setTextButton(false);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    setTextButton(false);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    setTextButton(false);
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        {
          <EditAvatarPopup
            onUpdateUser={handleUpdateAvatar}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText={textButton ? "Сохранить..." : "Сохранить"}
          />
        }
        {
          <EditProfilePopup
            onUpdateUser={handleUpdateUser}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            buttonText={textButton ? "Сохранить..." : "Сохранить"}
          />
        }
        {
          <AddPlacePopup
            onUpdateUser={handleAddPlaceSubmit}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText={textButton ? "Создать..." : "Создать"}
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
