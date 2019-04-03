import React from 'react';
import { goToUrl } from '../utils/functions';

const Logo = () => {
  return (
    <div className="logo">
      <a onClick={() => goToUrl('https://acikkuran.com')}>
        <img
          src="https://static.acikkuran.com/images/logo.png"
          alt="Açık Kuran"
        />
      </a>
    </div>
  );
};

export default Logo;
