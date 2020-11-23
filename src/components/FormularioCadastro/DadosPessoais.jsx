import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/'
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErro';
function DadosPessoais({ aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
   

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({
                    nome, sobrenome, cpf, novidades, promocoes
                });
            }

        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                name='nome'
                label="Nome"
                variant='outlined'
                margin='normal'
                fullWidth
                margin='normal' />

            <TextField id="sobrenome"
                value={sobrenome}
                label="Sobrenome"
                variant='outlined'
                margin='normal'
                name='sobrenome'
                fullWidth
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }} />

            <TextField
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
                value={cpf}
                onChange={(event) => {
                    setCPF(event.target.value);
                }}
                label="CPF"
                variant='outlined'
                margin='normal'
                fullWidth />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" onChange={(event) => {
                    setPromocoes(event.target.checked);
                }} checked={promocoes} color="primary" />}
            />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" onChange={(event) => {
                setNovidades(event.target.checked);
            }} checked={novidades} color="primary" />} />

            <Button variant="contained" color="primary" type="submit">Proximo</Button>
        </form>
    );
}

export default DadosPessoais;