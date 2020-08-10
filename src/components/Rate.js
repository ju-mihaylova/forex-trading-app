import React from 'react';
import Currency from './Currency';

const Rate = (props) => (
  <div className='rate-item'>
    <div>
      <h3 className='rate-abbreviation'>{`EUR${props.currency}`}</h3>
      <Currency currency={props.currency} className='currency' />
    </div>
    <div className={`rate-pill ${props.rateColor}`}>{props.formattedRate}</div>
  </div>
);

export default Rate;
