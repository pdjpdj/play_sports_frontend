import React from 'react';
import './Header.css';
import gcn_header from '../img/gcn_header.png';
import nav_header from '../img/nav_header.png';
import search_header from '../img/search_header.png';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header>
      <img src={gcn_header} alt='' className='gcn-header-img'/>
      <img src={nav_header} alt='' className='nav-header-img'/>
      <img src={search_header} alt='' className='search-header-img'/>
    </header>
  );
};

export default Header;
