import React, { useEffect, useState } from "react";
import imagePen from "../images/SVG/Перо.svg";
import imageCross from "../images/SVG/Крест.svg";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    api
      .getServerUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => console.error(`Ошибка оформлении профиля ${error}`));
  }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getServerCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.error(`Ошибка отображения карточек ${error}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={`${userAvatar}`}
            alt="Аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            >
              <img className="profile__img-pen" src={imagePen} alt="Ручка" />
            </button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        >
          <img className="profile__img-cross" src={imageCross} alt="Крест" />
        </button>
      </section>
      <Card cards={cards} onCardClick={props.onCardClick} />
    </main>
  );
}

export default Main;
