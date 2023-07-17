import { createMachine } from "xstate";

export const bookingMachine = createMachine({
  id: "Buy plane tickets",
  initial: "initial",
  states: {
    initial: {
      on: {
        START: "search",
      },
    },
    search: {
      on: {
        CONTINUE: "passengers",
        CANCEL: "initial",
      },
    },
    passengers: {
      on: {
        DONE: "tickets",
        CANCEL: "initial",
      },
    },
    tickets: {
      on: {
        FINISH: "initial",
      },
    },
  },
});
