import './Header.css';
import Logo from './img/ghibli.png'

function Header() {
  return (
    <div className="Header">
      <img src={Logo} className="Logo"></img>
    </div>
  );
}

export default Header;
