import { useState } from "react";
import { radioButtons } from "../constants";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import Checkbox from "./Checkbox";

const Generator = () => {
  const [passLength, setPassLength] = useState(0);
  const [copied, setCopied] = useState(false);
  const { generatedPass, handleGenerate } = usePasswordGenerator();
  const [checkboxState, setCheckboxState] = useState(radioButtons);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(generatedPass);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <div className="container">
      {/* Password Text and copy */}
      {generatedPass && (
        <div className="header">
          <h2 className="title">{generatedPass}</h2>
          <button className="Btn" onClick={handleCopy}>
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      )}

      <div className="header">
        <h3 className="title">Character Length</h3>
        <h3>{passLength}</h3>
      </div>

      <input
        type="range"
        value={passLength}
        onChange={(e) => setPassLength(e.target.value)}
        max={20}
      />

      <div className="radioButtons">
        {checkboxState.map((item, index) => (
          <Checkbox
            key={index}
            item={item}
            onChange={(e) => {
              let localData = [...checkboxState];
              localData[index] = {
                ...localData[index],
                checked: e.target.checked,
              };
              setCheckboxState(localData);
            }}
          />
        ))}
      </div>

      <button
        className="Btn"
        onClick={() => handleGenerate(checkboxState, passLength)}
      >
        GENERATE PASSWORD
      </button>
    </div>
  );
};
export default Generator;
