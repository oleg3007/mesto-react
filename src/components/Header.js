import logoHeader from "../images/SVG/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoHeader}
        alt="Логотип 'Mesto Russia'"
      />
    </header>
  );
}
export default Header;
