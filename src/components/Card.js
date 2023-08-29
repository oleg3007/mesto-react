import React from "react";

function Card(props) {
  const cards = props.cards;

  return (
    <section className="elements">
      {cards.map((card) => (
        <div className="element" key={card._id}>
          <div className="element__trash"></div>
          <img
            className="element__mask-group"
            src={card.link}
            alt={card.name}
            onClick={() => props.onCardClick(card)}
          />
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like">
            <button className="element__group" type="button"></button>
            <p className="element__numbers-like">{card.likes.length}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Card;
