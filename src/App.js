import React from 'react';
import './App.css';
import FormRegister from './components/FormRegister';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { cpfValidate, passwordValidate } from './models/registers'
import registerValidations from './contexts/registerValidations';
function App() {
  return (
    <Container component="article" maxWidth='sm'>
      <Typography variant="h3" align="center" component="h1" >Simple Registration Form</Typography>
      <registerValidations.Provider value={{ cpf: cpfValidate, password: passwordValidate, name: passwordValidate }}>
        <FormRegister onSend={onSendForm} />
      </registerValidations.Provider>
    </Container>
  );
}


function onSendForm(dados) {
  console.log(dados)
}



export default App;
