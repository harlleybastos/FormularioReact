import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";
import registerValidations from "../contexts/registerValidations";
import useError from "../hooks/useError";
function PersonalData({ onSendOk }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCPF] = useState("");
  const [promotions, setPromotions] = useState(false);
  const [news, setNews] = useState(false);
  const validations = useContext(registerValidations);
  const [errors, validadeInfos, canISend] = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canISend()) {
          onSendOk({
            name: name,
            surname,
            cpf,
            news,
            promotions,
          });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id="name"
        onBlur={validadeInfos}
        error={!errors.name.valid}
        helperText={errors.name.text}
        name="name"
        label="First Name"
        variant="outlined"
        margin="normal"
        fullWidth
        margin="normal"
      />

      <TextField
        id="surname"
        value={surname}
        label="Last Name"
        variant="outlined"
        margin="normal"
        name="surname"
        fullWidth
        onChange={(event) => {
          setSurname(event.target.value);
        }}
      />

      <TextField
        onBlur={validadeInfos}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="cpf"
        name="cpf"
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promotions"
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            checked={promotions}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="news"
        control={
          <Switch
            name="news"
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            checked={news}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
