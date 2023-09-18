import img from "../images/SVG/Крестик.svg";

function InfoTooltip(props) {
  return (
    <>
      <div
        className={"popup popup-registration popup_active"}
        onClick={props.onClose}
      >
        <div className="popup__conteiner" onClick={(e) => e.stopPropagation()}>
          <button
            className="cros-popup popup__cros"
            type="button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup-registration__img"
            src={img}
            alt={props.card?.name}
          />
          <p className="popup-registration__text">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
          {/* <p className="popup-registration__text">Попробуйте ещё раз.</p> */}
        </div>
      </div>
    </>
  );
}
export default InfoTooltip;
