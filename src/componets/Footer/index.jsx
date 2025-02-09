import "./style.css";
import ABSSTRACTION from "..//..//assets/Abstract Design.png";
import Lets from "..//Lets/index";
import { NavLink } from "react-router-dom";
import LOGOFOOTER from "..//..//assets/LogoFooter.png";
import TAB from "..//..//assets/containerTab.png";
import Social from "..//social/index";

const Footer = () => {
  return (
    <footer>
      <img src={LOGOFOOTER} className="footer-logo" />
      <img src={TAB} />
      <div className="footer">
        <div className="footer-abs">
          <img src={ABSSTRACTION} />
        </div>
        <div className="footer-menu">
          <div className="lets-block">
            <p className="lets-block-p">
              A more meaningful home for photography
            </p>
            <Lets />
          </div>
          <nav className="footer-nav">
            <div className="footerBlock">
              <div className="nav-menu-ul">
                <ul>
                  <li className="ferstLink">
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      ABOUT ME
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      MY WORKS
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      TESTIMONISLS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-menu-ul">
                <ul>
                  <li className="ferstLink">
                    <NavLink>CLIENTS</NavLink>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      KLOVESTO
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      NUKEWAY
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      CLOVEN’S
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      MENVOL
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerBlock">
              <div className="nav-menu-ul">
                <ul>
                  <li className="ferstLink">
                    <NavLink to="/Portfolio">PORTFOLIO</NavLink>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      EVENTS
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      PORTRAIT
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      BRANDING
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      COMMERCIALE
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      WEDDING
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-menu-ul">
                <ul>
                  <li className="ferstLink">
                    <NavLink to="/Services">SERVICES</NavLink>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      PORTRAITS
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      EVENTS
                    </a>
                  </li>
                  <li>
                    <a href="" className="fotter-a">
                      COMMERCIAL
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="footer-abs abs-rev">
          <img src={ABSSTRACTION} />
        </div>
      </div>
      <div className="footer-end">
        <div>Terms & Conditions | Privacy Policy</div>
        <Social />
        <div>© 2024 Damien Braun Photography. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
