import React, { useState } from 'react';
import ModalDonateStyle from './modal-donate-style';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';

const ModalDonate = ({ artist, onClose }) => {
  const [input, setInput] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    amount: '',
  });

  const handleInputFocus = (e) => {
    setInput({ ...input, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`You donated ${input.amount}€ to ${artist}`);
    onClose();
  };

  return (
    <ModalDonateStyle>
      <div className="card">
        <Cards
          cvc={input.cvc}
          expiry={input.expiry}
          focused={input.focus}
          name={input.name}
          number={input.number}
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="name"
          name="name"
          placeholder="Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <div className="input-group">
          <input
            type="number"
            name="cvc"
            maxLength="3"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
          <input
            type="string"
            name="expiry"
            placeholder="Valid Thru"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <input
          type="number"
          name="amount"
          placeholder="How much do you want to donate?"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
        <input
          type="submit"
          className="modal-button"
          value="Donate to artist"
        />
      </form>
    </ModalDonateStyle>
  );
};

export default ModalDonate;
