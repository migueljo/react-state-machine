import "./App.css";
import React from "react";
import { useMachine } from "@xstate/react";

import { BaseLayout } from "./components/BaseLayout";
import { bookingMachine } from "./machines/booking-machine";

function App() {
  const [state, send] = useMachine(bookingMachine, { devTools: true });

  console.log("State: ", state);
  console.log("Matches true:", state.matches("initial"));
  console.log("Matches false:", state.matches("DONE"));
  console.log("Can true:", state.can("START"));
  console.log("Can true:", state.can("DONE"));

  return (
    <div className="App">
      <BaseLayout />
    </div>
  );
}

export default App;
