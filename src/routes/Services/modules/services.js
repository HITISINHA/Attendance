// ------------------------------------
// Constants
// ------------------------------------
export const SERVICES_INCREMENT = 'SERVICES_INCREMENT'
export const SERVICES_DOUBLE_ASYNC = 'SERVICES_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : SERVICES_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : SERVICES_DOUBLE_ASYNC,
          payload : getState().services
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SERVICES_INCREMENT]    : (state, action) => state + action.payload,
  [SERVICES_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function servicesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
