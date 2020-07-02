import React from 'react';
import { useHistory } from 'react-router-dom';

import './Checkout.scss'

import Button from '../../components/base/Button';

export default function Checkout() {
  const history = useHistory();

  const handleClickToHome = (e) => {
    e.preventDefault()
    history.push('/');
  }

  return (
    <section className="container checkout">
      <div className="checkout-container">
        <h2>Compra realizada com sucesso!</h2>
        <p>Esperamos que goste do seu produto.</p>
        <div className="checkout-btn checkout-btn--new-buy">
          <Button 
            type="submit"
            classNameBtn="btn__primary btn__primary--bigger"
            text="Comprar novamente"
            onClick={(e) => handleClickToHome(e)}
          />
        </div>
      </div>
    </section>
    );
  }  