import React from 'react';

const Currency = (props) => {
  switch (props.currency) {
    case 'USD':
      return <p className='currency'>EURO / U.S. DOLLAR</p>;
    case 'AUD':
      return <p className='currency'>EURO / AUSTRALIAN DOLLAR</p>;
    case 'CAD':
      return <p className='currency'>EURO / CANADIAN DOLLAR</p>;
    case 'BGN':
      return <p className='currency'>EURO / BULGARIAN LEV</p>;
    default:
      return null;
  }
};

export default Currency;
