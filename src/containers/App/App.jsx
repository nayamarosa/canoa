import React from 'react';

import './App.scss';

// import Input from '../../components/base/Input';
import Button from '../../components/base/Button';


function App() {
  return (
    <>
      {/* <Input 
      type="text"
      placeholder="o que você procura?"
      className="input__search"
      /> */}
      <div>
        <Button 
          type="submit"
          className="btn__primary btn__primary-buy"
          text="Comprar"
        />
        <Button 
          className="btn__primary btn__primary-size"
          text="PP"
        />
      </div>
      <div>
      <Button 
          type="submit"
          className="btn__secondary btn__secondary--blue"
          text="Adicionar ao carrinho"
          icon="fas fa-shopping-cart"
        />
        <Button 
          type="submit"
          className="btn__secondary btn__secondary--green"
          text="Finalizar compra"
        />
      </div>
      <Button 
        type="submit"
        className="btn__icon"
        icon="fas fa-search"
      />
      <Button 
        type="submit"
        className="btn__icon btn__icon--pink"
        icon="fas fa-times"
      />
      <Button 
        type="submit"
        className="btn__icon"
        icon="fas fa-shopping-cart"
      />
    </>
  );
}

export default App;
