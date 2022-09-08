const ADD_ACTION = 'ADD'
const SUBTRACT_ACTION = 'SUBTRACT'
const CLEAR_ACTION = 'CLEAR'
const ADD_TO_MEMORY_ACTION = 'ADD_TO_MEMORY'

const operationActions = (action, input) => {
   return ({ type: action, payload: input })
}

const nonOpActions = (action) => {
   return ({ type: action })
}

export { operationActions, nonOpActions, ADD_ACTION, SUBTRACT_ACTION, CLEAR_ACTION, ADD_TO_MEMORY_ACTION }