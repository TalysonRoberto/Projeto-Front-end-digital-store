import React from 'react';
import logoH from '../svg/logo-header.svg';
import logoF from '../svg/logo-footer.svg';

const Logo = ({ vlogo }) => {
  const logoUtil = vlogo === 'header' ? logoH : logoF;

  return (
    <img className="logo-mobile-fix object-contain" src={logoUtil} alt="Logo" />
  );
};

export default Logo;
