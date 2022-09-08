const operationActions = (action, input) => {
   return ({ type: action, payload: input })
}

const nonOpActions = (action) => {
   return ({ type: action })
}

export { operationActions, nonOpActions }