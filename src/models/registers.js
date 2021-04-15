function cpfValidate(cpf) {
  if (cpf.length !== 11) {
    return {
      valid: false,
      text: "CPF must be 11 digits!"
    }
  } else {
    return {
      valid: true,
      text: ""
    }
  }
}

function passwordValidate(password) {
  if (password.length < 4 || password.length > 72) {
    return {
      valid: false,
      text: "The password must be between 4 and 72 digits long!"
    }
  } else {
    return {
      valid: true,
      text: ""
    }
  }
}

export { cpfValidate, passwordValidate };