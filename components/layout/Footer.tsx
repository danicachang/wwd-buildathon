import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

//import './Footer.css'

const MenuBar = () => {
  return (
    <footer className="padding-h">
      <div className="content">

        <h3 className="notBold">
          <a className="title" href="/">
            Wander Women <span className="tablet-desktop">•</span>
            <br className="mobile" /> Buildathon
          </a>
        </h3>

        <div className="social-links">
          <a
            href="https://discord.gg/FNAGvdYprG"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="alternateHover"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/WanderWomenDAO"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="alternateHover"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/wanderwomendao/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="alternateHover"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MenuBar;
