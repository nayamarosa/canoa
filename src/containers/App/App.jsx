import React from 'react';

import './App.scss';

import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import IconButton from '../../components/base/IconButton';


function App() {
  return (
    <>
      <Input 
      type="text"
      className="input__search"
      />
      <Button 
      type="submit"
      className="btn__show-infos"
      text="Comprar"
      />
      <IconButton type="submit"/>
    </>
  );
}

export default App;
