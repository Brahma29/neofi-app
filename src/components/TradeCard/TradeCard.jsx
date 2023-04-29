import React, { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';
import './TradeCard.css';

import Icon from '../../assets/images/eth.png';
import DropIcon from '../../assets/images/drop-arrow.png';
import CurrencyPopUp from '../CurrencyPopup/CurrencyPopUp';
import axios from 'axios';

const TradeCard = ({
  tokens,
  selectedToken,
  currentPriceSelectedToken,
  setSelectedToken,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [inputPrice, setInputPrice] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const handleChange = (e) => {
    setInputPrice(e.target.value);
    setCalculatedPrice((prev) =>
      (e.target.value / currentPriceSelectedToken).toFixed(5)
    );
  };

  return (
    <>
      <div className="card">
        <CurrencyPopUp
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          tokens={tokens}
        />
        <div className="icon_wrapper">
          <div className="icon">
            <img src={Icon} alt="eth" />
          </div>
        </div>
        <div className="content">
          <div className="current_value">
            <span>Current value</span>
            <span className="price">
              {currentPriceSelectedToken || 'Getting...'}
            </span>
          </div>
          <div className="currency_dropdown">
            <button
              className="currency_dropdown_button"
              onClick={() => setIsOpen(true)}
            >
              <div className="selected_currency">
                <img src={Icon} alt="selected_currency_icon" />
                {selectedToken}
              </div>
              <div className="drop_icon">
                <img src={DropIcon} alt="drop_icon" />
              </div>
            </button>
          </div>
          <div className="amount_input">
            <label htmlFor="amount">Amount you want to invest</label>
            <input
              type="number"
              placeholder="0.00"
              id="amount"
              value={inputPrice}
              onChange={handleChange}
            />
          </div>
          <div className="currency_value">
            <label htmlFor="calculated_amount">
              Estimate Number of {selectedToken} You will Get
            </label>
            <input
              type="number"
              disabled
              placeholder="0.00"
              value={calculatedPrice}
            />
          </div>
          <button className="buy_button">Buy</button>
        </div>
      </div>
    </>
  );
};

export default TradeCard;
