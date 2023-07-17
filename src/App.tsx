import "./App.css";
import React from "react";
import { useMachine } from "@xstate/react";

import { BaseLayout } from "./components/BaseLayout";
import { bookingMachine } from "./machines/booking-machine";

function App() {
  const [state, send] = useMachine(bookingMachine, { devTools: true });

  console.log("State: ", state);

  return (
    <div className="App">
      <BaseLayout />
    </div>
  );
}

export default App;
