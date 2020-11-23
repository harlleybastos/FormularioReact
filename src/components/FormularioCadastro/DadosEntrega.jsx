import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
    const[cep, setCEP] = useState("");
    const[endereco, setEndereco] = useState("");
    const[numero, setNumero] = useState("");
    const[cidade, setCidade] = useState("");
    const[estado, setEstado] = useState("");


    return (
        <form onSubmit={(event) =>{
            event.preventDefault();
            aoEnviar({cep, endereco, numero, cidade, estado});
        }}>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event)=>{
                    setCEP(event.target.value);
                }}
            />

            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                value={endereco}
                onChange={(event)=>{
                    setEndereco(event.target.value);
                }} />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
                value={numero}
                onChange={(event)=>{
                    setNumero(event.target.value);
                }}
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                value={estado}
                onChange={(event)=>{
                    setEstado(event.target.value);
                }}
            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                value={cidade}
                onChange={(event) =>{
                    setCidade(event.target.value);
                }}
            />

            <Button fullWidth variant="contained" color="primary" type="submit">Finalizar Cadastro</Button>

        </form>
    );
}

export default DadosEntrega;