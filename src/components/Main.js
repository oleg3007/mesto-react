import React, { useContext } from "react";
import imagePen from "../images/SVG/Перо.svg";
import imageCross from "../images/SVG/Крест.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={`${currentUser.avatar}`}
            alt="Аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            >
              <img className="profile__img-pen" src={imagePen} alt="Ручка" />
            </button>
          </div>
          <p className="profile__text">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        >
          <img className="profile__img-cross" src={imageCross} alt="Крест" />
        </button>
      </section>
      <section className="elements">
        {props.cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              currentUser={currentUser}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
