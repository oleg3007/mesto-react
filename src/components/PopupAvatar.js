import React from "react";

function PopupAvatar() {
  return (
    <>
      <div className="popup__form-input">
        <input
          className="popup__hield popup__hield_enter_link"
          type="URL"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-input-error popup__form-input-error_field_avatar"></span>
      </div>
    </>
  );
}
export default PopupAvatar;
