import React, { useState } from "react";

function App() {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [BothTogether, SetBothTogether] = useState("");

  function FirstNameUpdate(event) {
    SetFirstName(event.target.value);
    console.log(event.target.value);
  }

  function LastNameUpdate(event) {
    SetLastName(event.target.value);
    console.log(event.target.value);
  }

  function AddBoth(event) {
    SetBothTogether(FirstName + " " + LastName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello,{BothTogether}</h1>
      <form onSubmit={AddBoth}>
        <input
          onChange={FirstNameUpdate}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={LastNameUpdate} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
