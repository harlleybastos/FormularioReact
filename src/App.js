import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/Formulario';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/cadastro'
import ValidacoesCadastro from './contexts/validacoesCadastro';
function App() {
  return (
    <Container component="article" maxWidth='sm'>
      <Typography variant="h3" align="center" component="h1" >Formulario de Cadastro </Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}


function aoEnviarFormulario(dados) {
  console.log(dados)
}



export default App;
