import React, { useReducer } from "react";
import reducer, { initialState } from './reducers/calcReducer';
import { operationActions, nonOpActions } from "./actions/calcActions";
import "./styles.css";

// //Class code:
// const addAction = (input) => {
//   return ({ type: 'ADD', payload: input })
// }

// const subtractAction = (input) => {
//   return ({ type: 'SUBTRACT', payload: input })
// }

// const clearActions = () => {
//   return ({ type: 'CLEAR' })
// }

// const addToMemoryAction = () => {
//   return ({ type: 'ADD_TO_MEMORY' })
// }

// let currentData = initialState
// console.log('Current State:', currentData)

// currentData = reducer(currentData, addAction(6))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, addAction(9))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, addToMemoryAction())
// console.log('Current State:', currentData)

// currentData = reducer(currentData, subtractAction(10))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, clearActions())
// console.log('Current State:', currentData)

//My code:
// Put in a seperate folder:
// const operationActions = (action, input) => {
//   return ({ type: action, payload: input })
// }

// const nonOpActions = (action) => {
//   return ({ type: action })
// }

let currentData = initialState
console.log('Current State:', currentData)

currentData = reducer(currentData, operationActions('ADD', 6))
console.log('Current State:', currentData)

currentData = reducer(currentData, operationActions('ADD', 9))
console.log('Current State:', currentData)

currentData = reducer(currentData, nonOpActions('ADD_TO_MEMORY'))
console.log('Current State:', currentData)

currentData = reducer(currentData, operationActions('SUBTRACT', 10))
console.log('Current State:', currentData)

currentData = reducer(currentData, nonOpActions("CLEAR"))
console.log('Current State:', currentData)



export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
