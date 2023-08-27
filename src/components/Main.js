import React from "react";
import imagePen from "../images/SVG/Перо.svg";
import imageCross from "../images/SVG/Крест.svg";
import Kusto from "../images/Kusto-min.png";

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__avatar-button" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={Kusto}
            alt="Аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">Жак-Ив-Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            >
              <img className="profile__img-pen" src={imagePen} alt="Ручка" />
            </button>
          </div>
          <p className="profile__text">Иследователь океана</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        >
          <img className="profile__img-cross" src={imageCross} alt="Крест" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
