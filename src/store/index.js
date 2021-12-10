import { configureStore } from '@reduxjs/toolkit'; //it allows to create a Reducer with certain enhancements. It will simplify a couple of aspects in one go. It firsts wants an object as as argument.
import counterReducer from './counter';
import authenticationReducer from './auth'
// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//     name: 'counter', //createSlice always needs a name as an identifier, Name is upto us, it doesnt have to be counter(as initial state)
//     initialState: initialCounterState,
//     reducers: {
//       increment(state) {
//         //every method automatically recieves latest state. In this, we dont need action bcz these methods automatically called depending which action was triggered.
//         state.counter++; //In this reducers, we allowed to manipulate the existing state,this was forbidden before, we must still not manipulate the existing state but when using Redux toolkit and its funcs like createSlice(), we cant accidentally manipulate the existing state because Redux Toolkit internally using another pkgg called immer which detects this type of code and automatically clone existing state and creating new state object, keep all the state which we are not editing and override the state which we are editing in an immutable way, so in end , its still immutable code.
//       },
//       decrement(state) {
//         state.counter--;
//       },
//       increase(state, action) {
//         // in ReduxToolKit, we still have reducers which listens to actions that have an extra data
//         state.counter = state.counter + action.payload; //we need access action.payload bczz that is name of the property which will hold extra data you might be dispatching.
//       },
//       toggleCounter(state) {
//         state.showCounter = !state.counter;
//       },
//     },
//   });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//    }
//    if(action.type==='toggle'){
//      return {
//        showCounter: !state.showCounter,
//        counter:state.counter
//      }

//    }

//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, authentication: authenticationReducer}, //{counter: counterSlice.reducer} if we have many reducers, multiple states so the code is like that by making an object of different reducers
}); //configureStore is like createStore() to create a store but it makes merging multiple reducers with one reducer easier thereafter.And it always needs an object,a configuration object expected by configureStore.


export default store;

//npm i @reduxjs/toolkit ...it simplifies a couple of aspects when working with redux.

//If you have multiple state slices, so its good to split the code into smaller pieces, its good to make an every slice intoits own file
