const INITIAL_STATE = {
  name: '',
  email: '',
  CPF: '',
}

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload.inputValue,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload.inputValue,
      };
    case 'SET_CPF':
      return {
        ...state,
        CPF: action.payload.inputValue,
      };
    default:
      return state;
  }
}
