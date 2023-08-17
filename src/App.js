import logoHeader from './images/SVG/Vector.svg'
import imagePen from './images/SVG/Перо.svg'
import imageCross from './images/SVG/Крест.svg'
import './index.css';

function App() {
  return (
  <>
	<header className="header">
		<img className="header__logo" src={logoHeader} alt="Логотип 'Mesto Russia'"/>
	</header>
	<main className="main">
		<section className="profile">
			<button className="profile__avatar-button">
				<img className="profile__avatar" src="#" alt="Аватар пользователя"/>
			</button>
			<div className="profile__info">
				<div className="profile__info-header">
					<h1 className="profile__title"></h1>
					<button className="profile__edit-button" type="button">
            <img className="profile__img-pen" src={imagePen} alt="Ручка"/>
          </button>
				</div>
				<p className="profile__text"></p>
			</div>
			<button className="profile__add-button" type="button">
        <img className="profile__img-cross" src={imageCross} alt="Крест"/>
          </button>
		</section>
		<section className="elements">
		</section>
	</main>
	<footer className="footer">
		<p className="footer__text">&copy; 2020 Mesto Russia</p>
	</footer>
	<div className="popup popup-profile">
		<div className="popup__conteiner">
			<button className="popup__cros cros-popup" type="button"></button>
			<h2 className="popup__title">Редактировать профиль</h2>
			<form name="place" className="popup__form" method="post"  noValidate>
				<div className="popup__form-input">
					<input className="popup__hield popup__hield_enter_name" type="text" name="name" placeholder="Имя" tabIndex="1"
						minLength="2" maxLength="40" required />
					<span className="popup__form-input-error popup__form-input-error_field_name"></span>
				</div>
				<div className="popup__form-input">
					<input className="popup__hield popup__hield_enter_about" type="text" name="about" placeholder="О себе"
						tabIndex="2" minLength="2" maxLength="200" required />
					<span className="popup__form-input-error popup__form-input-error_field_about"></span>
				</div>
				<button className="popup__button" type="submit">Сохранить</button>
			</form>
		</div>
	</div>
	<div className="popup popup-item">
		<div className="popup__conteiner">
			<button className="popup__cros popup-item__cros cros-popup" type="button"></button>
			<h2 className="popup__title">Новое место</h2>
			<form name="place" className="popup__form" method="post" noValidate>
				<div className="popup__form-input">
					<input className="popup__hield popup__hield_enter_title" type="text" name="name" placeholder="Название"
						tabIndex="1" minLength="2" maxLength="30" required />
					<span className="popup__form-input-error popup__form-input-error_field_name"></span>
				</div>
				<div className="popup__form-input">
					<input className="popup__hield popup__hield_enter_link" type="URL" name="link" placeholder="Ссылка на картинку"
						required />
					<span className="popup__form-input-error popup__form-input-error_field_link"></span>
				</div>
				<button className="popup__button popup-item__button popup__button_disabled" type="submit" disabled>Создать</button>
			</form>
		</div>
	</div>
	<div className="popup popup-image">
		<div className="popup-image__conteiner">
			<button className="cros-popup popup-image__cros" type="button"></button>
			<img className="popup-image__foto" src="#" alt=""/>
			<p className="popup-image__signature"></p>
		</div>
	</div>
	<div className="popup popup-removal">
		<div className="popup-removal__conteiner">
			<button className="popup__cros cros-popup" type="button"></button>
			<h2 className="popup__title popup-removal__title">Вы уверены?</h2>
			<button className="popup__button popup-removal__button" type="submit">Да</button>
		</div>
	</div>
	<div className="popup popup-avatar">
		<div className="popup-avatar__conteiner">
			<button className="popup__cros popup-avatar__cros cros-popup" type="button"></button>
			<h2 className="popup__title">Обновить аватар</h2>
			<form name="avatar" className="popup__form" method="post" noValidate>
				<div className="popup__form-input">
					<input className="popup__hield popup__hield_enter_link" type="URL" name="avatar" placeholder="Ссылка на картинку"
						required />
					<span className="popup__form-input-error popup__form-input-error_field_avatar"></span>
				</div>
				<button className="popup__button popup-avatar__button popup__button_disabled" type="submit"
					disabled>Сохранить</button>
			</form>
		</div>
	</div>
	<template id="event-card" className="event-card">
		<article className="element">
			<div className="element__trash"></div>
			{/* <img className="element__mask-group" src="#" alt=""> */}
			<h2 className="element__title"></h2>
			<div className="element__like">
				<button className="element__group" type="button"></button>
				<p className="element__numbers-like">0</p>
			</div>
		</article>
	</template>
  </>
  );
}

export default App;
