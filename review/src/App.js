import React, { useReducer } from "react";
import reducer, { initialState } from './reducers/calcReducer';
import { operationActions, nonOpActions, ADD_ACTION, SUBTRACT_ACTION, CLEAR_ACTION, ADD_TO_MEMORY_ACTION } from "./actions/calcActions";
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
// Put in a seperate folder as best practice:
// const operationActions = (action, input) => {
//   return ({ type: action, payload: input })
// }

// const nonOpActions = (action) => {
//   return ({ type: action })
// }

// let currentData = initialState
// console.log('Current State:', currentData)

// currentData = reducer(currentData, operationActions(ADD_ACTION, 6))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, operationActions(ADD_ACTION, 9))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, nonOpActions(ADD_TO_MEMORY_ACTION))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, operationActions(SUBTRACT_ACTION, 10))
// console.log('Current State:', currentData)

// currentData = reducer(currentData, nonOpActions(CLEAR_ACTION))
// console.log('Current State:', currentData)



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('Current State:', state)

  const handleAdd2 = () => {
    dispatch(operationActions(ADD_ACTION, 2))
  }

  const handleSubtract5 = () => {
    dispatch(operationActions(SUBTRACT_ACTION, 5))
  }

  const handleClear = () => {
    dispatch(nonOpActions(CLEAR_ACTION))
  }

  return (
    <div className="App">
      <textarea rows="1"
        value={state.currentValue}
        id="total"
        type="text"
        name="ans"></textarea>
      <br />
      <button onClick={handleAdd2} type="button" className="btn">
        + 2
      </button>
      <button onClick={handleSubtract5} type="button" className="btn">
        - 5
      </button>
      <button onClick={handleClear} type="button" className="btn">
        clear
      </button>
    </div>
  );
}
