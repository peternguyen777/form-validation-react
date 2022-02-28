import { useState } from "react";

function useFormInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouch, setEnteredValueTouch] = useState(false);

  const isValid = validateValue(enteredValue);
  const valueInputIsInvalid = !isValid && enteredValueTouch;

  const ValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const ValueBlurHandler = (event) => {
    setEnteredValueTouch(true);
  };

  const Reset = () => {
    setEnteredValue("");
    setEnteredValueTouch(false);
  };

  return {
    enteredValue,
    isValid,
    valueInputIsInvalid,
    ValueChangeHandler,
    ValueBlurHandler,
    Reset,
  };
}

export default useFormInput;
