import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithubAlt,
  faPatreon
} from '@fortawesome/free-brands-svg-icons';
import { goToUrl } from '../utils/functions';

library.add(faFacebook, faTwitter, faInstagram, faGithubAlt);

const SocialIcon = ({ icon, url }) => {
  return <FontAwesomeIcon onClick={() => goToUrl(url)} icon={icon} />;
};

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const SocialIcons = () => {
  return (
    <div className="social-links">
      <SocialIcon url="https://twitter.com/acikkuran" icon={faTwitter} />
      <SocialIcon url="https://instagram.com/acikkuran" icon={faInstagram} />
      <SocialIcon
        url="https://github.com/ziegfiroyt/acikkuran-api"
        icon={faGithubAlt}
      />
      <SocialIcon url="https://facebook.com/acikkuran" icon={faFacebook} />
      <SocialIcon url="https://patreon.com/acikkuran" icon={faPatreon} />
    </div>
  );
};

export default SocialIcons;
