import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DeliveryData({ onSendOk }) {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSendOk({
          cep,
          address,
          number,
          city,
          state,
        });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCEP(event.target.value);
        }}
      />

      <TextField
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />

      <TextField
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />

      <TextField
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />

      <TextField
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />

      <Button fullWidth variant="contained" color="primary" type="submit">
        Finalize Registration
      </Button>
    </form>
  );
}

export default DeliveryData;
