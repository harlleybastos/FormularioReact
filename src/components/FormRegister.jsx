import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import DataUser from "./DataUser";

function FormRegister({ onSend }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dataCatch, setDataCatch] = useState({});

  useEffect(() => {
    if (currentStep === form.length - 1) {
      onSend(dataCatch);
    }
  });

  const form = [
    <DataUser onSendOk={catchDatas} />,
    <PersonalData onSendOk={catchDatas} />,
    <DeliveryData onSendOk={catchDatas} />,
    <Typography variant="h5">Thank you for registering!</Typography>,
  ];
  function next() {
    setCurrentStep(currentStep + 1);
  }

  function catchDatas(data) {
    setDataCatch({ ...dataCatch, ...data });
    next();
  }
  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivery</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finishing</StepLabel>
        </Step>
      </Stepper>
      {form[currentStep]}
    </>
  );
}

export default FormRegister;
