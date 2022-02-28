import useFormInput from "../hooks/useFormInput";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFname,
    isValid: enteredFnameIsValid,
    valueInputIsInvalid: FnameInputIsInvalid,
    ValueChangeHandler: FnameChangeHandler,
    ValueBlurHandler: FnameBlurHandler,
    Reset: ResetFname,
  } = useFormInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLname,
    isValid: enteredLnameIsValid,
    valueInputIsInvalid: LnameInputIsInvalid,
    ValueChangeHandler: LnameChangeHandler,
    ValueBlurHandler: LnameBlurHandler,
    Reset: ResetLname,
  } = useFormInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailIsValid,
    valueInputIsInvalid: EmailInputIsInvalid,
    ValueChangeHandler: EmailChangeHandler,
    ValueBlurHandler: EmailBlurHandler,
    Reset: ResetEmail,
  } = useFormInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // setEnteredFnameTouch(true);
    // setEnteredLnameTouch(true);
    // setEnteredEmailTouch(true);

    if (!formIsValid) {
      return;
    }

    ResetFname();
    ResetLname();
    ResetEmail();
  };

  const FnameInputClasses = FnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const LnameInputClasses = LnameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const EmailInputClasses = EmailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={FnameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={FnameChangeHandler}
            onBlur={FnameBlurHandler}
            value={enteredFname}
          />
          {FnameInputIsInvalid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={LnameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={LnameChangeHandler}
            onBlur={LnameBlurHandler}
            value={enteredLname}
          />
          {LnameInputIsInvalid && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={enteredEmail}
        />
        {EmailInputIsInvalid && (
          <p className="error-text">Email should contain an "@" symbol.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
