import React from "react";

const UserInput = () => {
  const submitHandler = (event) => {
    // This prevents the webpage from reloading when the form is submitted.
    event.preventDefault();
    console.log("Submitted successfully");
  };

  const resetHandler = () => {
    console.log("Reset successfully");
  };

  // The first paramater targets the id for each input field that calls on the function.
  // The second parameter targets the value via the event which React provides.
  const inputHandler = (input, value) => {
    console.log(input, value);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (€)</label>
          <input
            // Here the inputHandler will be called as an arrow function
            // instead of being pointed at, making it reusable for each instance.
            // It looks at the input field id and gets the value via the event.
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (€)</label>
          <input
            // Here the inputHandler function is used again, but with a different id.
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => inputHandler("duration", event.target.value)}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button
          onClick={resetHandler}
          type="reset"
          className="buttonAlt">
          Reset
        </button>
        <button
          type="submit"
          className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
