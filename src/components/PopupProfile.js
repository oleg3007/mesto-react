import React from "react";

function PopupProfile() {
  return (
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
          required
        />
        <span className="popup__form-input-error popup__form-input-error_field_about"></span>
      </div>
    </>
  );
}
export default PopupProfile;
