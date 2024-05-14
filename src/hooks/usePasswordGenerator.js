import { useState } from "react";
import { radioButtons } from "../constants";

const usePasswordGenerator = () => {
  const [generatedPass, setGeneratedPass] = useState("");

  const handleGenerate = (checkboxState, passLength) => {
    let charSet = "";
    let selectedOptions = checkboxState
      .filter((item) => item.checked)
      .map((item) => item.title);

    if (!selectedOptions.length || !passLength) {
      return;
    }

    if (selectedOptions.includes(radioButtons[0].title)) {
      charSet += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (selectedOptions.includes(radioButtons[1].title)) {
      charSet += "qwertyuiopasdfghjklzxcvbnm";
    }

    if (selectedOptions.includes(radioButtons[2].title)) {
      charSet += "1234567890";
    }

    if (selectedOptions.includes(radioButtons[3].title)) {
      charSet += "@#$%^&*!";
    }

    let res = "";

    for (let i = 0; i < passLength; i++) {
      let idx = Math.floor(Math.random() * charSet.length);
      res += charSet[idx];
    }

    setGeneratedPass(res);
  };

  return { generatedPass, handleGenerate };
};

export default usePasswordGenerator;
