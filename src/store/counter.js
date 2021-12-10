import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter', //createSlice always needs a name as an identifier, Name is upto us, it doesnt have to be counter(as initial state)
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        //every method automatically recieves latest state. In this, we dont need action bcz these methods automatically called depending which action was triggered.
        state.counter++; //In this reducers, we allowed to manipulate the existing state,this was forbidden before, we must still not manipulate the existing state but when using Redux toolkit and its funcs like createSlice(), we cant accidentally manipulate the existing state because Redux Toolkit internally using another pkgg called immer which detects this type of code and automatically clone existing state and creating new state object, keep all the state which we are not editing and override the state which we are editing in an immutable way, so in end , its still immutable code.
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        // in ReduxToolKit, we still have reducers which listens to actions that have an extra data
        state.counter = state.counter + action.payload; //we need access action.payload bczz that is name of the property which will hold extra data you might be dispatching.
      },
      toggleCounter(state) {
        state.showCounter = !state.counter;
      },
    },
  });

  export const counterActions = counterSlice.actions; // createSlice automatically creates unique action identifiers for our different reducers methods. These methods are called action creators and they will create action objects which have always a type property automatically.
  export default counterSlice.reducer