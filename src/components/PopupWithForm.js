import React from "react";

function PopupWithForm(props) {
  const className = `popup-${props.name}`;
  const [onClose, setOnClose] = React.useState();

  React.useEffect(() => {
    function closurePopupEscape(e) {
      if (e.key === "Escape") {
        setOnClose(props.onClose);
      }
    }
    document.addEventListener("keydown", closurePopupEscape);
    return () => {
      document.removeEventListener("keydown", closurePopupEscape);
    };
  });

  return (
    <div
      className={`popup ${className} ${props.isOpen && "popup_active"}`}
      onClick={props.onClose}
    >
      <div className={`popup__conteiner`} onClick={(e) => e.stopPropagation()}>
        <button
          className={`popup__cros cros-popup`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          className="popup__form"
          method="post"
          noValidate
        >
          {props.children}
          <button
            className={`popup__button popup-${props.name}__button popup__button_disabled`}
            type="submit"
            disabled
            onClick={props.onClose}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;