import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import registerValidations from "../contexts/registerValidations";
import useError from "../hooks/useError";

function DataUser({ onSendOk }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const validations = useContext(registerValidations);
  const [errors, validadeInfos, canISend] = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canISend()) {
          onSendOk({ email, password });
        }
      }}
    >
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <TextField
        onBlur={validadeInfos}
        error={!errors.password.valid}
        helperText={errors.password.text}
        required
        id="password"
        label="password"
        name="password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}
export default DataUser;
