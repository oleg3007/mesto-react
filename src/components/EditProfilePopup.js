import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [dataName, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      dataName,
      about: description,
    });
  }

  return (
    <>
      {
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
          buttonText={props.buttonText}
          children={
            <>
              <div className="popup__form-input">
                <input
                  className="popup__hield popup__hield_enter_name"
                  type="text"
                  name="name"
                  placeholder="Имя"
                  tabIndex="1"
                  minLength="2"
                  maxLength="40"
                  value={dataName || ""}
                  onChange={handleChangeName}
                  required
                />
                <span className="popup__form-input-error popup__form-input-error_field_name"></span>
              </div>
              <div className="popup__form-input">
                <input
                  className="popup__hield popup__hield_enter_about"
                  type="text"
                  name="about"
                  placeholder="О себе"
                  tabIndex="2"
                  minLength="2"
                  maxLength="200"
                  value={description || ""}
                  onChange={handleChangeDescription}
                  required
                />
                <span className="popup__form-input-error popup__form-input-error_field_about"></span>
              </div>
            </>
          }
        />
      }
    </>
  );
}
export default EditProfilePopup;
