import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar}) {
    const [etapaAtual, setEtapatual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    

    useEffect(() => {
        if(etapaAtual === formulario.length-1) {
            aoEnviar(dadosColetados);
        }
    })

    const formulario = [<DadosUsuario aoEnviar={coletaDados}/>, <DadosPessoais aoEnviar={coletaDados}/>, <DadosEntrega aoEnviar={coletaDados}/>,
    <Typography variant="h5">Obrigado pelo cadastro !</Typography>
    ]
    function proximo() {
        setEtapatual(etapaAtual + 1);
    }

    function coletaDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo();
    }
    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            {formulario[etapaAtual]}
        </>
    );
}


export default FormularioCadastro;