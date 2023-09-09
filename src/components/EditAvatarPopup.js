import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const refToAvatar = useRef();

  function handleChangeAvatar(evt) {
    refToAvatar.current.value = evt.target.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({ avatar: refToAvatar.current.value });
    evt.target.reset();
  }

  return (
    <>
      {
        <PopupWithForm
          name="avatar"
          title="Обновить Аватар"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          buttonText={props.buttonText}
          children={
            <>
              <div className="popup__form-input">
                <input
                  className="popup__hield popup__hield_enter_link"
                  type="URL"
                  name="avatar"
                  placeholder="Ссылка на картинку"
                  ref={refToAvatar}
                  onChange={handleChangeAvatar}
                  required
                />
                <span className="popup__form-input-error popup__form-input-error_field_avatar"></span>
              </div>
            </>
          }
        />
      }
    </>
  );
}
export default EditAvatarPopup;
