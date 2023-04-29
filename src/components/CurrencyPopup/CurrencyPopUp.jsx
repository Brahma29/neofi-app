import React, { useEffect, useState } from 'react';
import Icon from '../../assets/images/eth.png';
import CrossIcon from '../../assets/images/cross.svg';
import TickIcon from '../../assets/images/tick.svg';

import './CurrencyPopUp.css';
import axios from 'axios';

const CurrencyPopUp = ({
  isOpen,
  setIsOpen,
  selectedToken,
  setSelectedToken,
  tokens,
}) => {
  return (
    <div className={`popup_wrapper ${isOpen && 'open'}`}>
      <div className="popup_container">
        <div className="popup_header">
          <img
            src={CrossIcon}
            alt="cross_icon"
            className="cross_icon"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="search_input">
          <input type="text" placeholder="Search Chains" name="currency" />
        </div>
        <div className="listed_currencies">
          {tokens.map((token) => (
            <div
              className={`listed_currency ${
                selectedToken === token && 'selected'
              }`}
              onClick={() => {
                setSelectedToken(token);
                setIsOpen(false);
              }}
              key={token}
            >
              <div className="currency_icon">
                <img src={Icon} alt="icon" />
                {token}
              </div>
              {selectedToken === token && (
                <div className="tick">
                  <img src={TickIcon} alt="tick" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrencyPopUp;
