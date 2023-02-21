import { useState } from 'react';

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const strengthText = getStrength(e.target.value);
    setStrength(strengthText);
  }

  const strengthMap = {
    1: "weak",
    2: "medium",
    3: "strong",
  };

  const getIndicator = (password, strengthValue) => {
    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!strengthValue.upper && char >= 65 && char <= 90) {
        strengthValue.upper = true;
      } else if (!strengthValue.numbers && char >= 48 && char <= 57) {
        strengthValue.numbers = true;
      } else if (!strengthValue.lower && char >= 97 && char <= 122) {
        strengthValue.lower = true;
      }
    }

    let strengthIndicator = 0;

    for (let metric in strengthValue) {
      if (strengthValue[metric] === true) {
        strengthIndicator++;
      }
    }

    return strengthMap[strengthIndicator] ?? "";
  };

  const getStrength = (password) => {
    let strengthValue = {
      upper: false,
      numbers: false,
      lower: false,
    };

    return getIndicator(password, strengthValue);
  };

  return (
    <div>
      <input type="password" id="password" onChange={handlePasswordChange} value={password} />
      <div id="strength">{strength ? `${strength} Password` : ""}</div>
      <div id="bars" className={strength}></div>
    </div>
  );
}

export default PasswordStrength;