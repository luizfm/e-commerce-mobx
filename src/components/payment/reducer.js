export const INITIAL_STATE = {
  cardNumber: null,
  ownerName: '',
  cvc: '',
  expires: '',
}

export const UPDATE_STATE = 'UPDATE_STATE'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
