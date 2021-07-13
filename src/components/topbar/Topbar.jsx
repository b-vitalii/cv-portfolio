import "./topbar.scss";
import { Person, Mail, Telegram } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BoikoTeam.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+38(097)100-33-69</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vitali90@ukr.net</span>
          </div>
          <div className="itemContainer">
            <Telegram className="icon" />
            <span>@vitaly_boiko</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
