import React from 'react';

const Header = (props) => (
  <div className='header'>
    <div className='container header-flex'>
      <h1 className='header-title'>{props.title}</h1>
      <h2 className='header-date'>{props.date}</h2>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Forex Rates'
};

export default Header;
