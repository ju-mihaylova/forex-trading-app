import React, { Component } from 'react';
import axios from 'axios';
import numeral from 'numeral';
import moment from 'moment';
import Header from './Header';
import Rate from './Rate';
import { URL } from '../config';
import '../styles/ForexRates.css';

class ForexRatesApp extends Component {
  state = {
    rates: {},
    date: 0,
    counter: 0,
    signToggle: 1,
    rateColor: 'green',
    intervalId: ''
  };

  updateForexRates = () => {
    const intervalId = setInterval(() => {
      if (this.state.counter !== 0 && this.state.counter % 60000 === 0) {
        this.setState((prevState) => ({
          signToggle: prevState.signToggle * -1,
          rateColor: prevState.signToggle * -1 === -1 ? 'red' : 'green'
        }));
      }
      this.setState((prevState) => {
        const rates = {};
        for (let rateName in prevState.rates) {
          if (
            prevState.rates[rateName] <= 1.1002 &&
            Math.sign(prevState.signToggle) === -1
          ) {
            rates[rateName] = 1.1001;
          } else {
            rates[rateName] =
              prevState.rates[rateName] + prevState.signToggle * 0.0001;
          }
        }
        return {
          rates,
          intervalId,
          counter: prevState.counter + 5000
        };
      });
      console.log(this.state.counter);
    }, 5000);
  };

  formatRate = (rate) => {
    return numeral(rate).format('0,0.0000');
  };

  componentDidMount() {
    axios.get(URL).then(
      (response) => {
        this.setState(() => ({
          rates: response.data.rates,
          date: response.data.timestamp
        }));
        this.updateForexRates();
      },
      (e) => console.log(e)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter === 295000) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    const { rates, date, rateColor } = this.state;
    const formattedDate = moment.unix(date).format('MMMM Do, YYYY');
    return (
      <div>
        <Header date={formattedDate} />
        <div className='container'>
          {Object.keys(rates).map((keyName, keyIndex) => (
            <Rate
              key={keyIndex}
              currency={keyName}
              rateColor={rateColor}
              formattedRate={this.formatRate(rates[keyName])}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ForexRatesApp;
