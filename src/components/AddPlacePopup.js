import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameCard = useRef();
  const linkCard = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      nameCard: nameCard.current.value,
      link: linkCard.current.value,
    });
    evt.target.reset();
  }

  return (
    <>
      {
        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          buttonText={props.buttonText}
          children={
            <>
              <div className="popup__form-input">
                <input
                  className="popup__hield popup__hield_enter_title"
                  type="text"
                  name="name"
                  placeholder="Название"
                  tabIndex="1"
                  minLength="2"
                  maxLength="30"
                  ref={nameCard}
                  required
                />
                <span className="popup__form-input-error popup__form-input-error_field_name"></span>
              </div>
              <div className="popup__form-input">
                <input
                  className="popup__hield popup__hield_enter_link"
                  type="URL"
                  name="link"
                  placeholder="Ссылка на картинку"
                  ref={linkCard}
                  required
                />
                <span className="popup__form-input-error popup__form-input-error_field_link"></span>
              </div>
            </>
          }
        />
      }
    </>
  );
}
export default AddPlacePopup;
