export const INITIAL_STATE = {
  name: '',
  nameError: '',
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  confirmPassword: '',
  confirmPasswordError: '',
}

export const UPDATE_STATE = 'UPDATE_STATE'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}
