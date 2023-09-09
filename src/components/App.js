import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import PopupAvatar from "./PopupAvatar";
import EditProfilePopup from "./EditProfilePopup";
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
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .deleteCard(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.filter((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((error) => console.error(`Ошибка удаления карточки ${error}`));
    }
  }

  function handleUpdateUser({ dataName, about }) {
    // console.log(dataName, about);
    api
      .patchToSentProfile({ dataName, about })
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((error) =>
        console.error(`Ошибка отображения профиля пользователя ${error}`)
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
          <EditProfilePopup
            onUpdateUser={handleUpdateUser}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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
