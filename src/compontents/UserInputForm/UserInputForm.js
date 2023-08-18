import React, { useState } from "react";
import classes from "./UserInputForm.module.css";

// Object which stores the property id's with an initial value.
const initialInputState = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  "investment-duration": "",
};

const UserInputForm = (props) => {
  const [userInput, setUserInput] = useState(initialInputState);

  const submitHandler = (event) => {
    // This prevents the webpage from reloading when the form is submitted.
    event.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    // Resets the form to its initial (empty) state.
    setUserInput(initialInputState);
    console.log("Reset successfully");
  };

  // The first paramater targets the id for each input field that calls on the function.
  // The second parameter targets the value via the event which React provides.
  const inputHandler = (input, value) => {
    // Creates a new object based on the initialInputState object
    // This way we can update the state and store the latest input values
    setUserInput((previousInput) => {
      return {
        // The spread operator copies the previous object
        // and can be used to change the values with the new state.
        ...previousInput,
        // Sets a property dynamically, where we can dynamically access a property name.
        // JS evaluates the code inside the square brackets and uses the value as the key.
        // This refers to the inputHandler property that holds the id we wish to target,
        // and connects the value property to it.
        // the + converts the string to a number.
        [input]: +value,
      };
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input
            // Here the inputHandler will be called as an arrow function
            // instead of being pointed at, making it reusable for each instance.
            // It looks at the input field id and gets the value via the event.
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            // Here we pass the new state so that we can use the new inputted value.
            // We do that by accessing the targeted property via props.
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            // Here the inputHandler function is used again,
            // but it targets a different property id.
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="investment-duration">
            Investment Duration (years)
          </label>
          <input
            onChange={(event) =>
              inputHandler("investment-duration", event.target.value)
            }
            value={userInput["investment-duration"]}
            type="number"
            id="investment-duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={classes.buttonAlt}>
          Reset
        </button>
        <button
          type="submit"
          className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInputForm;
