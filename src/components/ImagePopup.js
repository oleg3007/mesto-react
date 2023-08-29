import React, { useState } from "react";

function ImagePopup(props) {
  React.useEffect(() => {
    function closurePopupEscape(e) {
      if (e.key === "Escape") {
        props.onClose();
      }
    }
    document.addEventListener("keydown", closurePopupEscape);
    return () => {
      document.removeEventListener("keydown", closurePopupEscape);
    };
  });
  return (
    <>
      <div
        className={`popup popup-image ${props.card && "popup_active"}`}
        onClick={props.onClose}
      >
        <div
          className="popup-image__conteiner"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cros-popup popup-image__cros"
            type="button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup-image__foto"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="popup-image__signature">
            {props.card && props.card.name}
          </p>
        </div>
      </div>
    </>
  );
}
export default ImagePopup;
