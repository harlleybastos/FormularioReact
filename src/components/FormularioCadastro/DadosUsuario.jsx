import { Button, TextField} from '@material-ui/core';
import React, { useState, useContext  } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErro';

function DadosUsuario({aoEnviar}){
    const[senha, setSenha] = useState("");
    const[email, setEmail] = useState("");

    const validacoes = useContext(ValidacoesCadastro);
    const[erros, validarCampos, possoEnviar] = useErros(validacoes);



    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField
            required id="email"
            label="Email"
            name='email'
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) =>{
                setEmail(e.target.value);
            }} />

            <TextField
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            required id="senha"
            label="Senha"
            name="senha"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth 
            value={senha}
            onChange={(e) =>{
                setSenha(e.target.value);
            }} />
            <Button type="submit" variant="contained" color="primary">Proximo</Button>
        </form>
    );
}
export default DadosUsuario;