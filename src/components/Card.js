import React from "react";

function Card(props) {
  const card = props.card;
  const isOwn = card.owner._id === props.currentUser._id;
  const isLiked = card.likes.some((i) => i._id === props.currentUser._id);
  const cardLikeButtonClassName = `element__group ${
    isLiked && "element__group_color_black"
  }`;
  function handleLikeClick(card) {
    props.onCardLike(card);
  }
  function handleDeleteClick(card) {
    props.onCardDelete(card);
  }

  return (
    <>
      <div className="element">
        {isOwn && (
          <div className="element__trash" onClick={handleDeleteClick}></div>
        )}
        <img
          className="element__mask-group"
          src={card.link}
          alt={card.name}
          onClick={() => props.onCardClick(card)}
        />
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button
            className={cardLikeButtonClassName}
            onClick={() => handleLikeClick(card)}
            type="button"
          ></button>
          <p className="element__numbers-like">{card.likes.length}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
