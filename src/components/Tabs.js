import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

library.add(faBook, faCodeBranch);

const Tabs = ({ tab, setTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        <li className={tab === 'search' ? 'is-active' : ''}>
          <a onClick={() => setTab('search')}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Kuran'da Ara</span>
          </a>
        </li>
        <li className={tab === 'root' ? 'is-active' : ''}>
          <a onClick={() => setTab('root')}>
            <span className="icon is-small">
              <FontAwesomeIcon icon={faCodeBranch} />
            </span>
            <span>Kök Ara</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired
};

export default Tabs;
