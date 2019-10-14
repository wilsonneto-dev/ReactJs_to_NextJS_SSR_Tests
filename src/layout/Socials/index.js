import React, { Component } from 'react';

/* style */
import './index.scss';

/* icons */
import iconFacebook from '../../images/ic-fb.png';
import iconInstagram from '../../images/ic-ig.png';
import iconYoutube from '../../images/ic-yt.png';

/* social links */
const socialLinks = {
  facebook: 'https://www.facebook.com/belasartesalacarte',
  Instagram: 'https://www.instagram.com/belasartesalacarte/',
  Youtube: 'https://www.youtube.com/channel/UCl8MCsaxzWnm_D4izigpTeg'
};

class Socials extends Component {
  render() {
    return (
      <div className="relative">
        <aside className="social-links">
          <ul>
            <li>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconFacebook} alt="Siga-nos no Facebook" />
              </a>
            </li>
            <li>
              <a
                href={socialLinks.Instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconInstagram} alt="Siga-nos no Instagram" />
              </a>
            </li>
            <li>
              <a
                href={socialLinks.Youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconYoutube} alt="Siga-nos no Youtube" />
              </a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Socials;
