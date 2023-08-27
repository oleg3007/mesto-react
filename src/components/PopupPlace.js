import React from "react";

function PopupPlace() {
  return (
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
          required
        />
        <span className="popup__form-input-error popup__form-input-error_field_link"></span>
      </div>
    </>
  );
}
export default PopupPlace;
